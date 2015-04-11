import homeModule from './modules/home/home';
import Config from './config';

var appModule = angular.module("DigiBankDevTool", ['ngMaterial', 'ngNewRouter', 'LocalStorageModule', homeModule.name]);

appModule.config(Config);

