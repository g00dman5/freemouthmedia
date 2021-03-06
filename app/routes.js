// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
   path: '/',
   name: 'Home',
   getComponent(nextState, cb) {
     import('containers/Home')
       .then(loadModule(cb))
       .catch(errorLoading);
      },
    },


    {
    path: '/dashboardcontainer',
    name: 'DashboardContainer',
    getComponent(nextState, cb) {
      import('containers/DashboardContainer')
        .then(loadModule(cb))
        .catch(errorLoading);
      }
    },
    {
    path: '/shop',
    name: 'Shop',
    getComponent(nextState, cb) {
     import('containers/Shop')
       .then(loadModule(cb))
       .catch(errorLoading);
      },
    },

    {
    path: '/media',
    name: 'Media',
    getComponent(nextState, cb) {
     import('containers/Media')
       .then(loadModule(cb))
       .catch(errorLoading);
      },
    },


    {
    path: '/tour',
    name: 'Tour',
    getComponent(nextState, cb) {
     import('containers/Tour')
       .then(loadModule(cb))
       .catch(errorLoading);
      },
    },

    {
    path: '/signup',
    name: 'SignUp',
    getComponent(nextState, cb) {
     import('containers/signUp')
       .then(loadModule(cb))
       .catch(errorLoading);
      },
    },

    {
    path: '/signin',
    name: 'SignIn',
    getComponent(nextState, cb) {
     import('containers/signIn')
       .then(loadModule(cb))
       .catch(errorLoading);
      },
    },


















     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
