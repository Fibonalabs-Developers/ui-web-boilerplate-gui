import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BackendBoilerPlate from './pages/BackendBoilerplate';
import FrontendBoilerPlate from './pages/FrontendBoilerplate';
// import Home from './pages/Home';
import HomePage from './pages/HomePage';
import PdfGenerator from './pages/PdfGenerator';
import JustCommunication from './pages/JustCommunication';
import CaptchaGenerator from './pages/CaptchaGenerator';
import Commentmodule from './pages/CommentModule';
import Utility from './pages/Utility';
import ReactNative from './pages/ReactNative';
import Flutter from './pages/Flutter';
import HomePageTags from './tags/homepagetags';
import FrontendBoilerPlateTags from './tags/Frontendboilerplatetags';
import BackendBoilerPlateTags from './tags/BackendboilerplateTags';
import PdfGeneratorTags from './tags/pdfgeneratortags';
import Justcommunicationtags from './tags/justcommunicationtags';
import Captchageneratortags from './tags/captchageneratortags';
import CommentModuleTags from './tags/Commentmoduletags';
import Utilitytags from './tags/utilitytags';
import Reactnativetags from './tags/Reactnativetags';
import FlutterTags from './tags/fluttertags';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePageTags />
          <HomePage />
        </Route>
        <Route exact path="/react-boilerplate">
          <FrontendBoilerPlateTags />
          <FrontendBoilerPlate />
        </Route>
        <Route exact path="/backend-boilerplate">
          <BackendBoilerPlateTags />
          <BackendBoilerPlate />
        </Route>
        <Route exact path="/pdf-generator">
          <PdfGeneratorTags />
          <PdfGenerator />
        </Route>
        <Route exact path="/just-communication">
          <Justcommunicationtags />
          <JustCommunication />
        </Route>
        <Route exact path="/captcha-generator">
          <Captchageneratortags />
          <CaptchaGenerator />
        </Route>
        <Route exact path="/comment-module">
          <CommentModuleTags />
          <Commentmodule />
        </Route>
        <Route exact path="/utility">
          <Utilitytags />
          <Utility />
        </Route>
        <Route exact path="/react-native">
          <Reactnativetags />
          <ReactNative />
        </Route>
        <Route exact path="/flutter">
          <FlutterTags />
          <Flutter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
