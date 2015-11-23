Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/login', {
    name: 'login',
    template: 'login'
});

Router.route('/register', {
    name: 'register',
    template: 'register'
});

Router.route('/child-main', {
    name: 'childMain',
    template: 'childMain'
});

Router.route('/child-main/child-profile', {
    name: 'childProfile',
    template: 'childProfile',
    data: function () { return Children.findOne({firstName: 'Finn'}); }
});

