
class Config {

    constructor($mdThemingProvider, $mdIconProvider, localStorageServiceProvider, $componentLoaderProvider ){

        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg"          , 128)
            .icon("sso"        , "./assets/svg/sso.svg"         , 128)
            .icon("oauth"      , "./assets/svg/oauth.svg"       , 128)
            .icon("services"   , "./assets/svg/services.svg"    , 128)
            .icon("logs"       , "./assets/svg/logs.svg"        , 128)
            .icon("properties" , "./assets/svg/properties.svg"  , 128)
            .icon("settings"   , "./assets/svg/settings.svg"    , 128)
            .icon("menu"       , "./assets/svg/menu.svg"        , 24)
            .icon("share"      , "./assets/svg/share.svg"       , 24)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512);

        var themes = [
            'red',
            'purple',
            'deep-purple',
            'indigo',
            'blue',
            'light-blue',
            'cyan',
            'teal',
            'green',
            'light-green',
            'lime',
            'yellow',
            'amber',
            'orange',
            'deep-orange',
            'brown',
            'grey',
            'blue-grey'
        ];

        for(var index = 0; index < themes.length; ++index) {
            console.log(themes[index] + '-theme');

            $mdThemingProvider.theme(themes[index] + '-theme')
                .primaryPalette(themes[index])
                .accentPalette('pink');
        }

        $mdThemingProvider.alwaysWatchTheme(true);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('pink');

        localStorageServiceProvider.setPrefix('DevTool');

        //Set default component location
        $componentLoaderProvider.setTemplateMapping(function(componentName){
            return '/modules/'+componentName+"/"+componentName+'.html';
        });

    }

}

Config.$inject = ['$mdThemingProvider', '$mdIconProvider', 'localStorageServiceProvider', '$componentLoaderProvider'];

export default Config;