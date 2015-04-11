import homeModule from './modules/home/home';
import ssoModule from './modules/sso/sso';
import Config from './config';

var appModule = angular.module("DigiBankDevTool", ['ngMaterial', 'ngNewRouter', 'LocalStorageModule', homeModule.name, ssoModule.name]);

appModule.config(Config);

