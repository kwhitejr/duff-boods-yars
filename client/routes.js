import App from 'containers/App';

function errorLoading(err) {
  console.log('Page failed to load. ', err); // eslint-disable-line
}

function loadRoute(cb) {
  return ({ default: module }) => cb(null, module);
}

export default {
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    {
      path: 'home',
      getComponent(location, cb) {
        System.import('containers/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'about',
      getComponent(location, cb) {
        System.import('containers/About')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('containers/NotFound')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};
