import {connect} from 'react-redux';
import Head from 'next/head';

import {selectLanguage} from './../redux/actions/language';
import Nav from '../components/Navbar';

class Contact extends React.Component {
  static getInitialProps = async ({reduxStore, req, query: {lang}}) => {
    const isServer = !!req;
    
    const request = {
      params: isServer ? req.params : undefined,
      query: isServer ? req.query : undefined
    }

    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    reduxStore.dispatch(selectLanguage(lang));
    return {req: request, lang: lang}
  }

  render () {
    return (
      <div>
        <Head>
          <title>Contact</title>
        </Head>
        <Nav/>
        Contact.js
      </div>
    );
  };
};

function mapStateToProps (state) {
  const lang = state.language;
  return {store: {language: lang}};
};

export default connect(mapStateToProps)(Contact);