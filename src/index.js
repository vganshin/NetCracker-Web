import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { connect } from 'react-redux';
import { subscribe, unsubscribe, getTokens} from 'actions/subscriptions';
import { VisibilityFilters, setVisibilityFilter, setPattern } from 'actions'

window.store =  store;

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

@connect(state => state)
class App extends React.Component {
  render() {
    const { dispatch, visibilityFilter } = this.props;

    const email = this.props.auth.profile.email;

    return (
      <div className='wrapper'>
        <Header email={email} />
        <div className='main'>
          <Description />
          <SearchLine
            activeFilter={visibilityFilter.filter}
            setPattern={pattern => dispatch(setPattern(pattern))}
            setVisibilityFilter={filter => dispatch(setVisibilityFilter(filter))}
          />
          <Tokens
            tokens={this.props.subscriptions.tokens}
            filter={visibilityFilter.filter}
            pattern={visibilityFilter.pattern}
            subscribe={tokenId => dispatch(subscribe(tokenId))}
            unsubscribe={tokenId => dispatch(unsubscribe(tokenId))}
          />
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <a className='logo' href='/'>
          <span className='netcracker__black_color'>Net</span>
          <span className='netcracker__blue_color'>Serials</span>
        </a>
        <span className='profile'>
          <span className='email'>{this.props.email}</span>
          <a href='/logout' className='logout'>
            logout
          </a>
        </span>
        <hr/>
      </div>
    );
  }
}

class Description extends React.Component {
  render() {
    return (
      <div className='description'>
        Выберите сериалы, которые Вам интересны.
        <br />
        О выходе новых серий мы сообщим по почте.
      </div>
    );
  }
}

class SearchLine extends React.Component {
  changePattern() {
    const pattern = this.refs.pattern.value.trim().toLowerCase();
    this.props.setPattern(pattern);
  }

  render() {
    const { dispatch, activeFilter } = this.props;

    return (
      <div className='filter'>
        <div className='filter__subscription'>
          <span className={activeFilter === VisibilityFilters.SHOW_SUBSCRIBED ? 'filter__subscription_active' : ''} onClick={() => this.props.setVisibilityFilter(VisibilityFilters.SHOW_SUBSCRIBED)} >Подписки</span>
          <span className={activeFilter === VisibilityFilters.SHOW_ALL ? 'filter__subscription_active' : ''} onClick={() => this.props.setVisibilityFilter(VisibilityFilters.SHOW_ALL)}>Все</span>
          <span className={activeFilter === VisibilityFilters.SHOW_UNSUBSCRIBED ? 'filter__subscription_active' : ''} onClick={() => this.props.setVisibilityFilter(VisibilityFilters.SHOW_UNSUBSCRIBED)}>Неподписки</span>
        </div>
        <input className='filter__search_line' type='text' ref='pattern' placeholder='Поиск по названию' onChange={() => this.changePattern()}/>
      </div>
    );
  }
}

class Tokens extends React.Component {
  render() {
    const { tokens, pattern, filter, subscribe, unsubscribe } = this.props;

    const godFilter = token => (token.serial.title.toLowerCase().indexOf(pattern) + 1) || (token.studio.name.toLowerCase().indexOf(pattern) + 1);

    let filteredTokens = tokens.filter(godFilter);

    if (filter !== VisibilityFilters.SHOW_ALL && filter === VisibilityFilters.SHOW_SUBSCRIBED) {
      filteredTokens = filteredTokens.filter(token => token.subscribed === true);
    }

    if (filter !== VisibilityFilters.SHOW_ALL && filter === VisibilityFilters.SHOW_UNSUBSCRIBED) {
      filteredTokens = filteredTokens.filter(token => token.subscribed === false);
    }

    return (
      <div>
        {filteredTokens.length > 0 ?
          filteredTokens.map(token => <Token token={token} pattern={pattern} subscribe={subscribe} unsubscribe={unsubscribe} />) :
          <div className='f5_message'>F5. Должно помочь.</div>
        }
      </div>
    );
  }
}

class Token extends React.Component {
  renderButton() {
    if (this.props.token.subscribed) {
      return <button className='token__button token__button_unsubscribe' onClick={() => this.props.unsubscribe(this.props.token.id)} >Отписаться</button>
    }
    return <button className='token__button token__button_subscribe' onClick={() => this.props.subscribe(this.props.token.id)}>Подписаться</button>
  }

  backgroundPattern(str, pattern) {
    if (str.toLowerCase().indexOf(pattern) === -1) {
      return <span>{str}</span>;
    } else {
      return (
        <span>
          {str.slice(0, str.toLowerCase().indexOf(pattern))}
          <span style={{'background-color': 'yellow'}}>
            {str.slice(str.toLowerCase().indexOf(pattern), str.toLowerCase().indexOf(pattern) + pattern.length)}
          </span>
          {str.slice(str.toLowerCase().indexOf(pattern) + pattern.length)}
        </span>
      );
    }
  }

  render() {
    const { token, pattern } = this.props;

    return (
      <div className='token'>
        {this.renderButton()}
        <div className='token__name'>
          <a href={`https://yandex.ru/search/?text=${encodeURI(token.serial.title + ' сериал')}`} target="_blank">
            {this.backgroundPattern(token.serial.title, pattern)}
          </a>
        </div>
        <div className='token__studio'>
          {this.backgroundPattern(token.studio.name, pattern)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('react-app'));
