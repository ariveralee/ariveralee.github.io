function injectCSS(a) {
    a = a || 'div.ebates-notification{position:fixed;right:10px;border-radius:4px;box-shadow:rgba(0,0,0,0.5) 0 0 10px;background:#fff;font-size:100%;overflow:hidden;z-index:2147483647 !important;box-sizing:content-box !important}div.ebates-notification *{box-sizing:content-box !important;vertical-align:middle;line-height:normal;padding:0;margin:0}div.ebates-notification table,div.ebates-notification td{border-collapse:collapse !important;background:none;border:0 !important;margin:0 !important;padding:4px;width:auto}div.ebates-notification .ebates-notification-logo-bg{background-color:#18b333;padding:0 16px;position:relative;width:110px;height:92px}div.ebates-notification .ebates-notification-logo-bg .ebates-notification-logo-bg-arrow{position:absolute !important;right:0 !important;top:0 !important;border-top:46px solid white !important;border-bottom:46px solid white !important;border-left:26px solid #18b333 !important}div.ebates-notification .ebates-notification-close{background-size:100%;text-align:center;font-size:14px;font-family:"Roboto",sans-serif;font-weight:300;text-decoration:underline;color:#888;cursor:pointer}div.ebates-notification .ebates-notification-logo{display:inline-block !important;width:103px !important;height:42px !important;margin:0 !important;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAqCAYAAACuh0VLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEEwNDE2QkFGMEI3MTFFMTlDQkU5OEVFMUVCMTc1OTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEEwNDE2QkJGMEI3MTFFMTlDQkU5OEVFMUVCMTc1OTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTA0MTZCOEYwQjcxMUUxOUNCRTk4RUUxRUIxNzU5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTA0MTZCOUYwQjcxMUUxOUNCRTk4RUUxRUIxNzU5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkWPZkkAAAcESURBVHja7FsxbBxF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") !important}div.ebates-notification .ebates-notification-button{position:relative;cursor:pointer;min-width:220px;height:40px;text-align:center;color:#FFF !important;text-decoration:none;line-height:43px;font-family:"Roboto",sans-serif !important;font-weight:700;font-size:15px;display:block;margin:10px 8px;padding:0 8px;white-space:nowrap}div.ebates-notification .ebates-notification-promo{color:#929ca0;background:#f1f1f1;box-shadow:inset 0 1px 1px rgba(0,0,0,0.1)}div.ebates-notification .ebates-notification-promo .ebates-promo-h1{font-family:"Roboto",sans-serif !important;font-size:40px;line-height:40px;font-weight:800;float:left;width:33%;text-align:right}div.ebates-notification .ebates-notification-promo .ebates-promo-h2{font-family:"Roboto",sans-serif !important;font-size:14px;line-height:14px;font-weight:600;float:none;float:left;margin:7px}div.ebates-notification .ebates-notification-promo .ebates-promo-h2 small{font-weight:400;font-size:12px;line-height:12px}div.ebates-notification .ebates-notification-button:active{-webkit-box-shadow:0 1px 0 rgba(255,255,255,0.5) inset,0 -1px 0 rgba(255,255,255,0.1) inset;top:5px}div.ebates-notification .ebates-notification-button:active:before{top:-11px;bottom:-5px;content:""}div.ebates-notification .ebates-notification-button.red{margin:16px 8px 4px 8px !important;text-shadow:-1px -1px 0 #A84155 !important;color:#fff !important !important;background:#D25068 !important;border:1px solid #D25068 !important;background-image:linear-gradient(to bottom, #F66C7B, #D25068) !important;border-radius:5px !important;box-shadow:0 1px 0 rgba(255,255,255,0.5) inset,0 -1px 0 rgba(255,255,255,0.1) inset,0 4px 0 #AD4257,0 4px 2px rgba(0,0,0,0.5) !important}div.ebates-notification .ebates-notification-button.red:hover{background:#F66C7B !important;background-image:linear-gradient(top, #D25068, #F66C7B) !important}div.ebates-notification .ebates-notification-button.blue{text-shadow:-1px -1px 0 #2C7982;color:#fff !important;background:#3EACBA;border:1px solid #379AA4;background-image:linear-gradient(top, #48C6D4, #3EACBA);border-radius:5px;box-shadow:0 1px 0 rgba(255,255,255,0.5) inset,0 -1px 0 rgba(255,255,255,0.1) inset,0 4px 0 #338A94,0 4px 2px rgba(0,0,0,0.5)}div.ebates-notification .ebates-notification-button.blue:hover{background:#48C6D4;background-image:linear-gradient(top, #3EACBA, #48C6D4)}div.ebates-notification .ebates-notification-button-activated{position:relative;cursor:pointer;min-width:220px;height:40px;text-align:center;color:#FFF !important;text-decoration:none;line-height:43px;font-family:"Roboto",sans-serif !important;font-weight:700;font-size:15px;display:block;margin:10px 8px;padding:0 8px;white-space:nowrap;color:#18b333 !important;border:1px solid #18b333;border-radius:5px;cursor:default}.ebates-explanation{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.6);background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABGCAYAAAA3mEEuAAAABHNCSVQICAgIfAhkiAAAAGJ6VFh0UmF3IHByb2ZpbGUgdHlwZSBBUFAxAAB4nFXIsQ2AMAwAwd5TeIR3HBwyDkIBRUKAsn9BAQ1XnuztbKOveo9r60cTVVVVz5JrrmkBZl4GbhgJKF8t/ExEDQ8rHgYgD0i2FMl6UPBzAAAH0klEQVR4nO2ca2wcVxWAv3N3Y8dx27BpGsUrIAUSUJGA8JBCaQVFioBWDUXQWDyKVcfemXWdRCSKaWUkjEUUKh6hGK89s17HiVsl6qZQlSQkqoSgTUob0fL6USgFWkXEbqtiN03tNJZnDj8ymyyR3fqx6/Vjvj/2PffOnaP9dGdn79w7QsiM09XV9U7P824FNojIQ7Zt90RLndRCobOz81pjzFeAjb7vrxORXNVZIBRRTFzXXaqqXxORO4F1Y7VR1bUAMlZlyPRwHOcTIrIV2AgsvrxeVV8RkUqgUlVH+/v7K0IRBSKbzUYGBgZuE5FtwI2X16vqs8AjwKH+/v6T8Xj8MHAzQCQSWRNemqbJ7t27KyorKzcNDAzsEJFrc3FVHRWR48CvjDGPJBKJFwA6Ojre29ra6ruu+xyBCN/3V4QipoHrup8FeoBVIoKqDgLHgEPl5eVHa2trX8tv7zjOBqAG2Cgip1Q1V7U8FDFFMpnMMs/zdgJPAPeJyO/6+vr+2tra6o/V3nXd5aqaAboBPM87bYwBwPf9c6GIKVJfXz8A3DDR9qp6r4isUNUTAJFIZCA3Iowxr5nipBmSj+M414tIHTCyZMmSxwB83x/K1Xue1xeKKDItLS1GRH4eFB+sqakZAohEIhdFGGMGQxFFJh6P1wMfD4qpXHx0dPT13P99fX1vhiKKSHt7+9WqugtAVR+3bfvkGM20tbXVD0UUkWg06ojI1UHxB/l1qpr77H8LEIooEq7rbhSR24PiiWQyeSy/PhqNXhX8+xCEIorCnj17rgE6cmURuXuMZsPB3xMQiig4qiojIyNdwPKgfMCyrN9f3k5EzgBUVFT8G0IRBaerq6tRRG4DUNU3VLVprHaJROJlwM3dzoazrwUknU6vVdWTQBmAiGyxLKt9IseGI6JApFKpK1T1QQIJwInTp093vNUx+YQiCoCqSjQa3Qu8PwidNcbUjDcBOBaRomS2wIjH483A5rxQvWVZj0+mj/A7Ypqk0+mbfd8/LCK5q0unbdt3Tbaf8NI0DTKZzHWquj9Pwh9isdi3ptJXKGKKpFKplZ7nHQXeEYReBW6vrq4emUp/oYgp0NvbWxmNRo8Aq4LQm77vf8m27VNT7TMUMUmy2WxkeHg4C3wsL1zT0NDwxHT6DUVMAlWVwcHBHhG5JS/WZNv2wen2Hd6+ToKqqqo2EUnkyqq6O5lMfq8QfYcjYoI4jnOviGzJlVXVsW17R6H6D39HTIBAQv5U9gOWZdWIiI570CQJR8TbMIaE/bFY7M5CSoDwO2JcVFXi8Xh7sJY1x75YLFZbXV3tFfp84aVpDLLZbGRwcDANbMrFgu+Euwo9EnKEIi7Ddd1FwF7g67mYqu62bXtHsSRAKOL/6O7uvnJ0dPQg8PlcTFWbksnkj4t97lBEQHd3d3x0dPQIsBYuLquvt21730ycPxQBOI7zQeCYiLwLLjxrNsZUW5Z1dKZyWPAigj0ODwNLg9B/RGSDZVl/nsk8FvTvCNd1G1X1US5J+GM0Gl030xIAFuT+iGw2WzY4ONgJbMrbZvswcEddXd3w+EcWjwV3aXJdtwr4JfDJIKRAi2VZO4t5e/p2LCgRruveqKoHRWRlEDojIndYlnW4pImxQKY4gumKe4BeEbkqiD1rjFlvWdaTJU4PWAAjorOzc4Ux5n7gc3nhfRUVFY255Y6zgXktIp1Of0ZVDwBVQWgISNq2/UAJ0xqTeSmira2tvKysrBVoyi11UdW/iMhXbdv+e4nTG5N5d/vqOM5HRKQX+HAQUuBHIyMj3926dev5Eqb2lsybERFMXTcBrVxaCHxKRGosy3qshKlNiHkhIpgryojI9XnhHmCbbdtnSpTWpJjTItra2srLy8vvAZoJRoGqvigitm3bj5Y2u8kxZ0V0dnbeYIzpAq4LQqqq7Z7nNTc2Nr5RytymwpwTEbyMZBdgEeSvqn8SkYZx9jHPCeaMiJaWFlNVVWUBO3N7l1X1dRFpjsViTjEe6M8kc0JEOp3+lO/77SLy0SCkQK8x5u5gU+CcZ1aLcF333aq6S0S+kRc+rqrbk8nk0yVLrAjMShEdHR0xY0yziGzm0ssJXxCRJsuyflHK3IrFrBLR09Oz+Pz585tF5DsEG0BU9SXg+8uWLctMdRPIXGBWiMhms2UDAwObgObcA3xgQFV/ODw83LZ9+/ZzpcxvJiipiOANkQlV3ZG3guK/wH3l5eXtl7+ccD5Tkkm/VCp1xaJFixK+738bWBm8IfIlEfmZ53ntc/EH2XSZ0RGRyWRWeZ63BagnWDmhqs+LyE+Hhob2LoRL0HjMiIjg5YLbgC9z6fHscVX9SX9//6HJ7NCfrxRNhOu6y0Xkm6paC3wILqygE5H7RSRdirVDs5mCigieCXwBqAW+CCwCUNWnRaQrGo0eqKurO1vIc84Xpi0imIpez4XLzgbgGgBVfU5EDqjq/mQy+fx0zzPfmZKIVCq1MhqNrgduBW4BruTCNPQzInLEGHMokUg8U8hE5zsTEtHd3R33PO/TqnqTqt4kIh8Iqv4FPOn7/m+AXzc0NLxStEznORdFpFKplWVlZWt8318NrAbeB6xR1dUislhV/yki/1DVvxljnvI876nwgy8coqriOE7cGPMe4FqgSkTOAa+q6svGmBeXLl16aq7P9892/gcsMvjPkApbugAAAABJRU5ErkJggg==");background-repeat:no-repeat;background-position:right 250px top 110px;z-index:2147483646 !important;opacity:0;transition:opacity .2s linear}.ebates-explanation .ebates-explanation-text{position:fixed;right:0;width:258px;text-align:center;margin:155px 350px 0 0;padding:0;font-size:18px;color:#FFF;text-shadow:1px 1px 1px rgba(0,0,0,0.6);line-height:24px;font-family:"PT Sans",sans-serif;font-weight:400;font-style:italic}.ebates-explanation.ebates-walktrhough{background-color:transparent}.ebates-explanation.ebates-walktrhough .ebates-explanation-text{color:#000;text-shadow:none}.ebates-serp-hidden{display:none}.ebates-serp.serp-inline{display:inline !important;margin:8px;font-size:13px;font-family:"Open Sans",sans-serif !important;color:#FF3300}.ebates-serp .ebates-serp-block{cursor:default !important;display:inline-block !important;margin:2px !important;padding:2px !important;height:16px !important;color:#000 !important;border-radius:3px !important;background:#fafafa !important}.ebates-serp .ebates-serp-block .ebates-serp-text{color:#000 !important}.ebates-serp .ebates-serp-block .ebates-serp-text{font-size:12px !important}.ebates-serp .ebates-serp-block .ebates-serp-text-hidden{display:none}.ebates-serp .ebates-serp-button{cursor:default !important;display:inline-block !important;margin:2px !important;padding:2px !important;height:16px !important;color:#000 !important;border-radius:3px !important;background:#fafafa !important;background:#fff !important;transition:all .1s linear}.ebates-serp .ebates-serp-button .ebates-serp-text{color:#000 !important}.ebates-serp .ebates-serp-button .ebates-serp-text{font-size:12px !important}.ebates-serp .ebates-serp-button .ebates-serp-text-hidden{display:none}.ebates-serp .ebates-serp-button .ebates-serp-text{color:#FF3300 !important;transition:all .1s linear}.ebates-serp .ebates-serp-button .ebates-serp-text-hidden{transform:scale(0, 1);width:0;display:inline-block;transition:width,transform .1s linear}.ebates-serp .ebates-serp-button.ebates-serp-button-activate{cursor:pointer !important}.ebates-serp .ebates-serp-button.ebates-serp-button-activate:hover{background:#FF3300 !important}.ebates-serp .ebates-serp-button.ebates-serp-button-activate:hover .ebates-serp-text{color:#fff !important}.ebates-serp .ebates-serp-button.ebates-serp-button-activate:hover .ebates-serp-text-hidden{transform:scale(1, 1);width:auto}.ebates-serp .ebates-serp-text{font-family:"Open Sans",sans-serif !important;font-size:14px !important;font-weight:400 !important;line-height:14px !important;color:#FF3300 !important;margin:2px 8px !important;display:inline-block !important;text-decoration:none !important;vertical-align:top !important}.ebates-serp .ebates-serp-text b{font-weight:600 !important}.ebates-serp .ebates-serp-text .ebates-serp-amount{color:#FF3300 !important}.ebates-serp .ebates-serp-coupons{display:none}.ebates-serp.ebates-serp-show-coupons .ebates-serp-coupons{display:inline-block}.ebates-serp-icon{display:inline-block !important;width:16px !important;height:16px !important;margin:0 !important;padding:0 !important;background-image:url("data:image/png;base64,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") !important;background-size:100% !important;background-position:center}@-moz-document url-prefix(){.ebates-serp-icon{background-image:url(http://www.ebates.com/favicon.ico) !important}}.ebates-serp-tab .ebates-serp-icon{margin:-3px 0 !important}.ebates-serp-results .ebates-serp-amount{color:#FF3300 !important;font-weight:bold !important}.ebates-serp-results .ebates-serp-icon{display:none !important}.ebates-serp-results .ebates-serp-text{color:#FF3300 !important;margin:0 !important}.ebates-serp-results-header{border-radius:0 !important;border:1px solid #ebebeb !important;border-width:1px 0 !important;margin:10px 10px 10px 132px !important;padding:8px !important;display:inline-block !important;min-width:500px !important;height:20px !important;line-height:20px !important}.ebates-serp-results-header span{display:inline-block !important;vertical-align:top !important;line-height:20px !important}.ebates-serp-results-header .ebates-serp-results-logo{display:inline-block !important;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAqCAYAAACuh0VLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEEwNDE2QkFGMEI3MTFFMTlDQkU5OEVFMUVCMTc1OTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEEwNDE2QkJGMEI3MTFFMTlDQkU5OEVFMUVCMTc1OTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTA0MTZCOEYwQjcxMUUxOUNCRTk4RUUxRUIxNzU5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTA0MTZCOUYwQjcxMUUxOUNCRTk4RUUxRUIxNzU5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkWPZkkAAAcESURBVHja7FsxbBxF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") !important;background-repeat:no-repeat !important;background-position:center !important;width:44px !important;height:20px !important;background-size:100% !important;padding-right:10px !important}.ebates-serp-results-header .ebates-serp-results-title{font-weight:bold !important;padding:0 10px !important}.ebates-serp-results-header .ebates-serp-results-sort{float:right !important}.ebates-serp-results-header .ebates-serp-no-results{display:none}.ebates-coupon-overlay-background{position:fixed;top:0;right:0;left:0;bottom:0;z-index:99999999;background-color:rgba(0,0,0,0.5);display:none}.ebates-coupon-overlay{box-shadow:0 0 4px #000 !important;position:fixed;top:50%;left:50%;margin-left:-250px;margin-top:-200px;min-width:480px;max-width:520px;padding:20px;background-color:white;font-family:"Roboto",sans-serif !important;text-align:center;text-transform:none}.ebates-coupon-overlay .bates-coupon-footer{background-color:#eee;margin:0 -20px -20px -20px;padding:20px}.ebates-coupon-overlay .bates-coupon-footer .copylink{border:1px solid #CDCDCD;border-radius:5px;padding:8px;background-color:white;margin:8px;cursor:pointer}.ebates-coupon-overlay .bates-coupon-footer .copylink input{float:left;padding:1px;border:none;outline:none;width:calc(100% - 50px);text-overflow:ellipsis;font-family:"Roboto",sans-serif !important;color:#657b90;font-weight:400;padding-right:8px;box-sizing:border-box;font-size:14px;cursor:pointer}.ebates-coupon-overlay .bates-coupon-footer .copylink .copylink-button{display:inline-block;width:50px;font-weight:bold;color:#23ae4a;font-size:16px}.ebates-coupon-overlay .bates-coupon-footer div.list-header{color:#465a65;line-height:18px;font-size:14px;font-weight:normal;vertical-align:top;padding:4px 0;margin:0;text-align:center;position:relative;z-index:1}.ebates-coupon-overlay .bates-coupon-footer div.list-header:before{border-top:1px solid #ccc;content:"";margin:0 auto;position:absolute;top:50%;left:0;right:0;bottom:0;z-index:-1}.ebates-coupon-overlay .bates-coupon-footer div.list-header span{background-color:#F1F1F1;padding:0 4px;cursor:default;font-style:inherit;text-transform:none;font-size:inherit;font-family:inherit;font-weight:inherit}.ebates-coupon-overlay .bates-coupon-footer .import-button-wrapper{width:100%;text-align:center}.ebates-coupon-overlay .bates-coupon-footer .import-button-wrapper .import-button{border-radius:6px;min-width:104px;height:38px;box-sizing:border-box;line-height:38px;text-align:center;font-size:16px;cursor:pointer;margin:6px;padding:0 12px;display:inline-block;vertical-align:middle;color:white}.ebates-coupon-overlay .bates-coupon-footer .import-button-wrapper .facebook{background-color:#0074b8}.ebates-coupon-overlay .bates-coupon-footer .import-button-wrapper .twitter{background-color:#00b0eb}.ebates-coupon-overlay .bates-coupon-footer .arrow-box{position:absolute;background:#969696;padding:8px 12px;border-radius:5px;text-align:center;z-index:1000;left:175px;top:360px;color:white;font-size:12px;display:none}.ebates-coupon-overlay .bates-coupon-footer .arrow-box:after{bottom:100%;left:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(150,150,150,0);border-bottom-color:#969696;border-width:5px;margin-left:-5px}.ebates-coupon-overlay hr{margin:0;padding:0;border:0;border-bottom:1px solid #aaa}.ebates-coupon-overlay br{display:block}.ebates-coupon-overlay .ebates-coupon-overlay-logo{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAqCAYAAACuh0VLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEEwNDE2QkFGMEI3MTFFMTlDQkU5OEVFMUVCMTc1OTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEEwNDE2QkJGMEI3MTFFMTlDQkU5OEVFMUVCMTc1OTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTA0MTZCOEYwQjcxMUUxOUNCRTk4RUUxRUIxNzU5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTA0MTZCOUYwQjcxMUUxOUNCRTk4RUUxRUIxNzU5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkWPZkkAAAcESURBVHja7FsxbBxF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");background-repeat:no-repeat;width:103px;height:42px;background-size:103px 42px;display:inline-block;padding:0;margin-bottom:8px}.ebates-coupon-overlay .ebates-coupons-button{cursor:pointer !important;background-color:#DDD !important;color:#000 !important;font-size:16px !important;font-weight:400 !important;font-family:"Roboto",sans-serif !important;border-radius:4px !important;padding:4px !important;line-height:18px;display:inline-block !important;margin:10px !important;padding:10px 40px !important}.ebates-coupon-overlay .ebates-coupons-button[disabled]{background:#fff !important;color:#aaa !important;cursor:default !important;font-size:14px !important}.ebates-coupon-overlay .ebates-coupon-loader-bg{border-radius:3px !important;background:#D8D8D8 !important;background-repeat:no-repeat !important;display:block !important;margin:0 60px !important;padding:0 !important;text-align:left !important;height:32px !important}.ebates-coupon-overlay .ebates-coupon-loader{border-radius:3px !important;background:#80D400 !important;background-repeat:no-repeat !important;width:0;height:30px !important;display:inline-block !important;margin:1px !important;padding:0 !important}.ebates-coupon-overlay .ebates-coupon-loader>div{text-align:center;font-size:16px}.ebates-coupon-overlay .ebates-coupons-text{font-family:"Roboto",sans-serif !important;font-size:18px !important;color:#888 !important;font-weight:400 !important;padding:8px !important;margin:8px !important;background-color:#fff !important;text-align:center}.ebates-coupon-overlay .ebates-coupons-text b{font-weight:600 !important}.ebates-coupon-overlay .ebates-coupons-header{font-family:"Roboto",sans-serif !important;font-size:18px !important;color:#888 !important;font-weight:400 !important;padding:8px !important;margin:8px !important;background-color:#fff !important;text-align:center;font-size:38px !important;font-weight:800 !important}.ebates-coupon-overlay .ebates-coupons-header b{font-weight:600 !important}.ebates-coupon-overlay .ebates-coupons-review-header{font-family:"Roboto",sans-serif !important;font-size:18px !important;color:#888 !important;font-weight:400 !important;padding:8px !important;margin:8px !important;background-color:#fff !important;text-align:center;padding:18px !important;font-size:24px !important;line-height:32px !important;font-weight:800 !important}.ebates-coupon-overlay .ebates-coupons-review-header b{font-weight:600 !important}.ebates-coupon-overlay .ebates-coupons-subtext{font-family:"Roboto",sans-serif !important;font-size:18px !important;color:#888 !important;padding:8px !important;margin:8px !important;background-color:#fff !important;text-align:center;text-align:left;margin:0 !important;line-height:14px !important;font-size:12px !important;padding:0 !important;font-weight:400 !important}.ebates-coupon-overlay .ebates-coupons-subtext b{font-weight:600 !important}.ebates-coupons-slider{position:fixed !important;color:#444 !important;top:0;right:0 !important;padding:8px !important;background:#fff !important;z-index:9999999999999 !important;border-bottom:3px solid #EEA800 !important;font-family:"Open Sans",sans-serif !important;min-width:270px !important;text-align:center !important;box-shadow:0 0 4px #000 !important}.ebates-coupons-slider .ebates-coupons-text{font-family:"Open Sans",sans-serif !important;color:#444 !important;font-weight:400 !important;font-size:16px !important}.ebates-coupons-button{border:0;border-radius:3px;background-color:#5DB257 !important;color:white !important;font-family:"Roboto","Open Sans",sans-serif !important;font-weight:400 !important;font-size:14px !important;line-height:14px !important;margin:8px !important;padding:6px 30px !important;text-transform:none;background-image:none !important;text-shadow:none !important;height:auto !important}.ebates-coupons-button a{text-decoration:none !important}.ebates-coupons-close{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0RUZEMTM3MkJGQkVFMzExODM1NkU5QTBEODBDMTIwNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNjQ5NkE3M0QwMTUxMUUzQjM3NUUxN0YxMjJGQUVDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNjQ5NkE3MkQwMTUxMUUzQjM3NUUxN0YxMjJGQUVDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1OUIwM0Y4RTJDQUUzMTFBRDE1RkFDRjEzNTk1MEIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRFRkQxMzcyQkZCRUUzMTE4MzU2RTlBMEQ4MEMxMjA3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wuWEgAAAAPZJREFUeNpi/P//PwOlgImBCmAQG8LIyNgOxKuBmBlNnBkq3ohhCihgkTEQrAYJ29vbP66vr2eDijEjiwPFGlH0YDGEDaQQpiE0NJQT2YCfP38Clf1fjdcQEAa6gAdmkKCg4HcsBrARNASE09LS+IWFhb+BDJCQkPjz7ds3rAbgNAQ5DERFRf+AaD8/v2/79+/nwaoenwEgL3z+/BlkwHf0wCZkCEYgrlq1SggWRo6Ojo+AYszIeliwpJ1rQA1P9u7dK8PMzLwGyI8GxtCvq1evagLZ1x0cHGSB9FIgjsCZTqC4ERqIzGjibFDxOmRxxuGViwECDACmGV8p6SRISQAAAABJRU5ErkJggg==");width:17px;height:17px;display:inline-block;padding:0;float:right;cursor:pointer;position:absolute;top:8px;right:8px}';
    var e = document.getElementsByTagName("head")[0], g = document.createElement("style");
    e.appendChild(g);
    if (g.styleSheet&&!g.styleSheet.disabled)
        g.styleSheet.cssText = a;
    else 
        try {
            g.textContent = a
    } catch (b) {}
};
!function() {
    var a = Handlebars.template, e = Handlebars.templates = Handlebars.templates || {};
    e["coupons-form-error"] = a(function(a, b, m, e, f) {
        function h() {
            return '\r\n\t\t<div class="ebates-coupons-text">We tried both coupons, but didn\u2019t find a discount.</div>\r\n\t'
        }
        function k(a) {
            var b;
            return "" + ('\r\n\t\t<div class="ebates-coupons-text">We tried all ' + x((b = a && a._coupons, b = null == b ||!1 === b ? b : b.length, typeof b === q ? b.apply(a) : b)) + " coupons, but didn\u2019t find a discount.</div>\r\n\t")
        }
        this.compilerInfo =
        [4, ">= 1.0.0"];
        m = this.merge(m, a.helpers);
        f = f || {};
        var c, l, p;
        a = "";
        var q = "function", x = this.escapeExpression, t = this, z = m.helperMissing;
        return a += '<div class="ebates-coupons-close ebates-coupons-button-close"></div>\r\n', l = m.equal || b && b.equal, p = {
            hash: {},
            inverse: t.program(3, function(b, a) {
                var g, d, c, f = "";
                return f += "\r\n\t", d = m.equal || b && b.equal, c = {
                    hash: {},
                    inverse: t.program(6, k, a),
                    fn: t.program(4, h, a),
                    data: a
                }, g = d ? d.call(b, (g = b && b._coupons, null == g ||!1 === g ? g : g.length), 2, c) : z.call(b, "equal", (g = b && b._coupons, null ==
                g ||!1 === g ? g : g.length), 2, c), (g || 0 === g) && (f += g), f + "\r\n"
            }, f),
            fn: t.program(1, function() {
                return '\r\n\t<div class="ebates-coupons-text">We tried the coupon, but didn\u2019t find a discount.</div>\r\n'
            }, f),
            data: f
        }, c = l ? l.call(b, (c = b && b._coupons, null == c ||!1 === c ? c : c.length), 1, p) : z.call(b, "equal", (c = b && b._coupons, null == c ||!1 === c ? c : c.length), 1, p), (c || 0 === c) && (a += c), a += '\r\n<div class="ebates-coupons-text">We saved you time and you still get <b class="ebates-coupon-saved">', (l = m.cashback) ? c = l.call(b, {
            hash: {},
            data: f
        }) : (l = b && b.cashback, c = typeof l === q ? l.call(b, {
            hash: {},
            data: f
        }) : l), a += x(c) + ' in Cash Back</b></br> when you order.</div>\r\n<div class="ebates-coupons-button ebates-coupons-button-close">Continue Check-out</div>'
    });
    e["coupons-form-review"] = a(function(a, b, m, e, f) {
        this.compilerInfo = [4, ">= 1.0.0"];
        m = this.merge(m, a.helpers);
        f = f || {};
        var h, k, c;
        a = "";
        e = m.helperMissing;
        var l = this.escapeExpression;
        return a += '<div class="ebates-coupons-close ebates-coupons-button-apply"></div>\r\n<div class="ebates-coupons-text">You saved money and earned Cash Back!</div>\r\n<div class="ebates-coupons-review-header ebates-coupon-saved">\r\n\t<font color="#3DAE2D">' +
        l((k = m.format || b && b.format, c = {
            hash: {},
            data: f
        }, k ? k.call(b, b && b.discount, b && b.currency, c) : e.call(b, "format", b && b.discount, b && b.currency, c))) + '</font> Coupon Savings <br />\r\n\t<font color="#3DAE2D">+ ', (k = m.cashback) ? h = k.call(b, {
            hash: {},
            data: f
        }) : (k = b && b.cashback, h = "function" === typeof k ? k.call(b, {
            hash: {},
            data: f
        }) : k), a += l(h) + '</font> Cash Back\r\n</div>\r\n<div class="ebates-coupons-text">Please leave us a quick review :)</div>\r\n<a class="ebates-coupons-button ebates-coupons-button-apply ebates-coupons-button-review" href="',
        k = m.equal || b && b.equal, c = {
            hash: {},
            inverse: this.program(3, function() {
                return "https://addons.mozilla.org/en-US/firefox/addon/ebates/reviews/add"
            }, f),
            fn: this.program(1, function() {
                return "https://chrome.google.com/webstore/detail/ebates-cash-back/chhjbpecpncaggjpdakmflnfcopglcmi/reviews?utm_source=chrome-ntp-icon"
            }, f),
            data: f
        }, h = k ? k.call(b, b && b.browser, "Chrome", c) : e.call(b, "equal", b && b.browser, "Chrome", c), (h || 0 === h) && (a += h), a += '" target="_blank">Review Ebates</a>\r\n<div class="ebates-coupons-subtext"><center>(opens new tab so you can go back to cart)</center></div>'
    });
    e["coupons-form-success"] = a(function(a, b, m, e, f) {
        this.compilerInfo = [4, ">= 1.0.0"];
        m = this.merge(m, a.helpers);
        f = f || {};
        var h, k, c;
        a = "";
        var l = this.escapeExpression;
        e = m.helperMissing;
        return a += '<div class="ebates-coupons-close ebates-coupons-button-apply"></div>\r\n<div class="ebates-coupons-text">Ebates saved you</div>\r\n<div class="ebates-coupons-header ebates-coupon-saved">' + l((k = m.format || b && b.format, c = {
            hash: {},
            data: f
        }, k ? k.call(b, b && b.discount, b && b.currency, c) : e.call(b, "format", b && b.discount, b && b.currency,
        c))) + '</div>\r\n<div class="ebates-coupons-text">\r\n', h = m["if"].call(b, b && b.coupon, {
            hash: {},
            inverse: this.program(3, function(a, b) {
                var g, c, f = "";
                return f += '\r\n\tby using the following coupons: <span class="ebates-coupon-code">', (c = m.codes) ? g = c.call(a, {
                    hash: {},
                    data: b
                }) : (c = a && a.codes, g = "function" === typeof c ? c.call(a, {
                    hash: {},
                    data: b
                }) : c), f + (l(g) + "</span>\r\n")
            }, f),
            fn: this.program(1, function(a) {
                var b;
                return "" + ('\r\n\tby using coupon: <span class="ebates-coupon-code">' + l((b = a && a.coupon, b = null == b ||!1 ===
                b ? b : b.code, "function" === typeof b ? b.apply(a) : b)) + "</span>\r\n")
            }, f),
            data: f
        }), (h || 0 === h) && (a += h), a += '\r\n</div>\r\n<div class="ebates-coupons-text">You will also earn <b>', (k = m.cashback) ? h = k.call(b, {
            hash: {},
            data: f
        }) : (k = b && b.cashback, h = "function" === typeof k ? k.call(b, {
            hash: {},
            data: f
        }) : k), a += l(h) + ' Cash Back</b> on this order!</div>\r\n<div class="ebates-coupons-button ebates-coupons-button-apply">Thanks, go back to Cart</div>'
    });
    e["coupons-form-taf"] = a(function(a, b, m, e, f) {
        this.compilerInfo = [4, ">= 1.0.0"];
        m = this.merge(m, a.helpers);
        f = f || {};
        var h, k, c;
        a = "";
        e = m.helperMissing;
        var l = this.escapeExpression;
        return a += '<div class="ebates-coupons-close ebates-coupons-button-apply"></div>\r\n<div class="ebates-coupons-text">Great news! We applied a working coupon for you and you will also earn Cash Back.</div>\r\n<div class="ebates-coupons-review-header ebates-coupon-saved">\r\n\t<font color="#3DAE2D">' + l((k = m.format || b && b.format, c = {
            hash: {},
            data: f
        }, k ? k.call(b, b && b.discount, b && b.currency, c) : e.call(b, "format", b &&
        b.discount, b && b.currency, c))) + '</font> Coupon Savings <br />\r\n\t<font color="#3DAE2D">+ ', (k = m.cashback) ? h = k.call(b, {
            hash: {},
            data: f
        }) : (k = b && b.cashback, h = "function" === typeof k ? k.call(b, {
            hash: {},
            data: f
        }) : k), a + (l(h) + '</font> Cash Back\r\n</div>\r\n<div class="ebates-coupons-text" style="font-size:14px !important">Did you know that you can get <b>additional $5</b> for every friend that joins?</div>\r\n<div class="bates-coupon-footer">\r\n\t<div>Copy and share this link:</div>\r\n\t<div class="copylink">\r\n\t\t<input id="referralLink" class="referralLink" readonly="" value="' +
        l((h = b && b.user, h = null == h ||!1 === h ? h : h.referralLink, "function" === typeof h ? h.apply(b) : h)) + '&amp;eeid=29041"><div class="copylink-button">Copy</div>\r\n\t\t<span class="arrow-box">Link copied to clipboard</span>\r\n\t</div>\r\n\t<div class="list-header" style="margin: 8px 0;"><span>or</span></div>\r\n\t<div class="import-button-wrapper">\r\n\t\t<span class="import-button facebook">Facebook</span>\r\n\t\t<span class="import-button twitter">Twitter</span>\r\n\t</div>\r\n</div>')
    });
    e["coupons-form"] = a(function(a,
    b, m, e, f) {
        function h() {
            return ""
        }
        function k() {
            return "s"
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        m = this.merge(m, a.helpers);
        f = f || {};
        var c, l, p;
        a = "";
        e = this.escapeExpression;
        var q = m.helperMissing;
        return a += '<div class="ebates-coupon-overlay-background">\r\n\t<div class="ebates-coupon-overlay">\r\n\t\t<div class="ebates-coupon-overlay-logo"></div>\r\n\r\n\t\t<div class="ebates-coupon-search ebates-coupon-form">\r\n\t\t\t<div class="ebates-coupons-close ebates-coupons-button-cancel"></div>\r\n\t\t\t<div class="ebates-coupons-text">\r\n\t\t\t\tWe are applying <b>' +
        e((c = b && b.coupons, c = null == c ||!1 === c ? c : c.length, "function" === typeof c ? c.apply(b) : c)) + "</b> coupon", l = m.equal || b && b.equal, p = {
            hash: {},
            inverse: this.program(3, k, f),
            fn: this.program(1, h, f),
            data: f
        }, c = l ? l.call(b, (c = b && b.coupons, null == c ||!1 === c ? c : c.length), 1, p) : q.call(b, "equal", (c = b && b.coupons, null == c ||!1 === c ? c : c.length), 1, p), (c || 0 === c) && (a += c), a += ' for you.<br/>\r\n\t\t\t\tRelax and let\'s see if we can save you more money :)\r\n\t\t\t</div>\r\n\t\t\t<div class="ebates-coupon-loader-bg">\r\n\t\t\t\t<div class="ebates-coupon-loader"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class="ebates-coupons-subtext"  style="margin: 0px 60px !important; text-align: left;">\r\n\t\t\t\tChecking <span class="ebates-coupon-index">0</span> out of ' +
        e((c = b && b.coupons, c = null == c ||!1 === c ? c : c.length, "function" === typeof c ? c.apply(b) : c)) + " coupon", l = m.equal || b && b.equal, p = {
            hash: {},
            inverse: this.program(3, k, f),
            fn: this.program(1, h, f),
            data: f
        }, c = l ? l.call(b, (c = b && b.coupons, null == c ||!1 === c ? c : c.length), 1, p) : q.call(b, "equal", (c = b && b.coupons, null == c ||!1 === c ? c : c.length), 1, p), (c || 0 === c) && (a += c), a += '\r\n\t\t\t</div>\r\n\t\t\t<div class="ebates-coupons-text">\r\n\t\t\t\tTrying coupon: <b class="ebates-coupon-code"></b>\r\n\t\t\t</div>\r\n\t\t\t<div class="ebates-coupons-button ebates-coupons-button-cancel" disabled="disabled">Cancel</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>'
    });
    e["coupons-slider"] = a(function(a, b, m, e, f) {
        function h() {
            return ""
        }
        function k() {
            return "s"
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        m = this.merge(m, a.helpers);
        f = f || {};
        var c, l, p;
        a = "";
        e = this.escapeExpression;
        var q = m.helperMissing;
        return a += '<div class="ebates-coupons-slider">\r\n\t\t<div class="ebates-coupons-close"></div>\r\n    <div class="ebates-coupons-text">Ebates found <b>' + e((c = b && b.coupons, c = null == c ||!1 === c ? c : c.length, "function" === typeof c ? c.apply(b) : c)) + "</b> coupon", l = m.equal || b && b.equal, p = {
            hash: {},
            inverse: this.program(3,
            k, f),
            fn: this.program(1, h, f),
            data: f
        }, c = l ? l.call(b, (c = b && b.coupons, null == c ||!1 === c ? c : c.length), 1, p) : q.call(b, "equal", (c = b && b.coupons, null == c ||!1 === c ? c : c.length), 1, p), (c || 0 === c) && (a += c), a += '</div>\r\n    <button class="ebates-coupons-button">Apply Coupon', l = m.equal || b && b.equal, p = {
            hash: {},
            inverse: this.program(3, k, f),
            fn: this.program(1, h, f),
            data: f
        }, c = l ? l.call(b, (c = b && b.coupons, null == c ||!1 === c ? c : c.length), 1, p) : q.call(b, "equal", (c = b && b.coupons, null == c ||!1 === c ? c : c.length), 1, p), (c || 0 === c) && (a += c), a += "</button>\r\n</div>"
    });
    e["notification-explanation"] = a(function(a, b, e, n, f) {
        return this.compilerInfo = [4, ">= 1.0.0"], this.merge(e, a.helpers), '<div class="ebates-explanation" style="opacity: 0;">\r\n  <div class="ebates-explanation-text">\r\nYour Cash Back Activation is Now Here! Remember to always activate Cash Back before you buy. \r\n  </div>\r\n</div>'
    });
    e["notification-reminder"] = a(function(a, b, e, n, f) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        f = f || {};
        var h;
        a = "";
        var k = this.escapeExpression;
        return a += '<div class="ebates-notification">\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<td class="ebates-notification-logo-bg">\r\n\t\t\t\t<div class="ebates-notification-logo"></div>\r\n\t\t\t\t<div class="ebates-notification-logo-bg-arrow"></div>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t',
        h = e["if"].call(b, b && b.activated, {
            hash: {},
            inverse: this.program(3, function(a, b) {
                var g, f, h = "";
                return h += '\r\n\t\t\t\t\t<div class="ebates-notification-button red ebates-notification-button-activate">Activate ', (f = e.cashBackAmount) ? g = f.call(a, {
                    hash: {},
                    data: b
                }) : (f = a && a.cashBackAmount, g = "function" === typeof f ? f.call(a, {
                    hash: {},
                    data: b
                }) : f), h + (k(g) + ' Cash Back</div>\r\n\t\t\t\t\t<center><span class="ebates-notification-close">No Thanks</span></center>\r\n\t\t\t\t')
            }, f),
            fn: this.program(1, function(a, b) {
                var g,
                f, h = "";
                return h += '\r\n\t\t\t\t\t<div class="ebates-notification-button-activated green">', (f = e.cashBackAmount) ? g = f.call(a, {
                    hash: {},
                    data: b
                }) : (f = a && a.cashBackAmount, g = "function" === typeof f ? f.call(a, {
                    hash: {},
                    data: b
                }) : f), h + (k(g) + " Cash Back Now Active</div>\r\n\t\t\t\t")
            }, f),
            data: f
        }), (h || 0 === h) && (a += h), a += "\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n</div>"
    });
    e["notification-walkthrough"] = a(function(a, b, e, n, f) {
        function h() {
            return '\r\n\t\t\t\t\t<div class="ebates-notification-button-activated green">8% Cash Back Now Active</div>\r\n\t\t\t\t'
        }
        function k() {
            return '\r\n\t\t\t\t\t<div class="ebates-notification-button ebates-notification-button-activate red">Activate 8% Cash Back</div>\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t'
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        f = f || {};
        var c;
        a = "";
        var l = this;
        return a += '<div class="ebates-notification">\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<td class="ebates-notification-logo-bg">\r\n\t\t\t\t<div class="ebates-notification-logo"></div>\r\n\t\t\t\t<div class="ebates-notification-logo-bg-arrow"></div>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t',
        c = e["if"].call(b, b && b.loggedIn, {
            hash: {},
            inverse: l.program(6, function() {
                return '\r\n\t\t\t\t<div class="ebates-notification-button ebates-notification-button-login blue">Click to Login</div>\r\n\t\t\t'
            }, f),
            fn: l.program(1, function(a, b) {
                var c, g = "";
                return g += "\r\n\t\t\t\t", c = e["if"].call(a, a && a.activated, {
                    hash: {},
                    inverse: l.program(4, k, b),
                    fn: l.program(2, h, b),
                    data: b
                }), (c || 0 === c) && (g += c), g + "\r\n\t\t\t"
            }, f),
            data: f
        }), (c || 0 === c) && (a += c), a += "\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n</div>"
    });
    e.notification =
    a(function(a, b, e, n, f) {
        function h() {
            return '\r\n\t\t\t\t\t\t<div class="ebates-notification-button ebates-notification-button-recommended blue">See Recommended Stores</div>\r\n\t\t\t\t\t'
        }
        function k(a, b) {
            var g, d = "";
            return d += "\r\n\t\t\t\t\t\t", g = e["if"].call(a, a && a.activated, {
                hash: {},
                inverse: t.program(7, l, b),
                fn: t.program(5, c, b),
                data: b
            }), (g || 0 === g) && (d += g), d + "\r\n\t\t\t\t\t"
        }
        function c(a, b) {
            var c, d, g = "";
            return g += '\r\n\t\t\t\t\t\t\t<div class="ebates-notification-button-activated green">', (d = e.cashBackAmount) ?
            c = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.cashBackAmount, c = typeof d === q ? d.call(a, {
                hash: {},
                data: b
            }) : d), g + (x(c) + " Cash Back Now Active</div>\r\n\t\t\t\t\t\t")
        }
        function l(a, b) {
            var c, d, g = "";
            return g += '\r\n\t\t\t\t\t\t\t<div class="ebates-notification-button ebates-notification-button-activate red">Activate ', (d = e.cashBackAmount) ? c = d.call(a, {
                hash: {},
                data: b
            }) : (d = a && a.cashBackAmount, c = typeof d === q ? d.call(a, {
                hash: {},
                data: b
            }) : d), g + (x(c) + ' Cash Back</div>\r\n\t\t\t\t\t\t\t<center><span class="ebates-notification-close">Activate Later</span></center>\r\n\t\t\t\t\t\t')
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        f = f || {};
        var p;
        a = "";
        var q = "function", x = this.escapeExpression, t = this, z = e.helperMissing;
        return a += '<div class="ebates-notification">\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<td class="ebates-notification-logo-bg">\r\n\t\t\t\t<div class="ebates-notification-logo"></div>\r\n\t\t\t\t<div class="ebates-notification-logo-bg-arrow"></div>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t', p = e["if"].call(b, b && b.loggedIn, {
            hash: {},
            inverse: t.program(9, function() {
                return '\r\n\t\t\t\t\t<div class="ebates-notification-button ebates-notification-button-login blue">Click to Login</div>\r\n\t\t\t\t'
            },
            f),
            fn: t.program(1, function(a, b) {
                var c, d, g, f = "";
                return f += "\r\n\t\t\t\t\t", d = e.equal || a && a.equal, g = {
                    hash: {},
                    inverse: t.program(4, k, b),
                    fn: t.program(2, h, b),
                    data: b
                }, c = d ? d.call(a, a && a.activationCode, 2, g) : z.call(a, "equal", a && a.activationCode, 2, g), (c || 0 === c) && (f += c), f + "\r\n\t\t\t\t"
            }, f),
            data: f
        }), (p || 0 === p) && (a += p), a += "\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</table>\r\n</div>"
    });
    e["serp-B"] = a(function(a, b, e, n, f) {
        function h() {
            return "\r\n\t\t\t\tCoupon and Deal\r\n\t\t\t"
        }
        function k() {
            return "\r\n\t\t\t\tCoupons and Deals\r\n\t\t\t"
        }
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        f = f || {};
        var c, l;
        a = "";
        var p = this.escapeExpression, q = this, x = e.helperMissing;
        return a += '<div class="ebates-serp">\r\n\t<div class="ebates-serp-button">\r\n\t\t<div class="ebates-serp-icon"></div>\r\n\t\t<span class="ebates-serp-text">\r\n\t\t\t<span class="ebates-serp-text-hidden">Activate </span>\r\n\t\t\t', (l = e.cashBackAmount) ? c = l.call(b, {
            hash: {},
            data: f
        }) : (l = b && b.cashBackAmount, c = "function" === typeof l ? l.call(b, {
            hash: {},
            data: f
        }) : l), a += p(c) +
        " Cash Back\r\n\t\t</span>\r\n\t</div>", c = e["if"].call(b, b && b.totalCoupons, {
            hash: {},
            inverse: q.noop,
            fn: q.program(1, function(a, b) {
                var c, g, f, d = "";
                return d += '<div class="ebates-serp-block">\r\n\t\t<span class="ebates-serp-text">\r\n\t\t\t<b>', (g = e.totalCoupons) ? c = g.call(a, {
                    hash: {},
                    data: b
                }) : (g = a && a.totalCoupons, c = "function" === typeof g ? g.call(a, {
                    hash: {},
                    data: b
                }) : g), d += p(c) + "</b> \r\n\t\t\t", g = e.equal || a && a.equal, f = {
                    hash: {},
                    inverse: q.program(4, k, b),
                    fn: q.program(2, h, b),
                    data: b
                }, c = g ? g.call(a, a && a.totalCoupons,
                1, f) : x.call(a, "equal", a && a.totalCoupons, 1, f), (c || 0 === c) && (d += c), d + "\r\n\t\t</span>\r\n\t</div>\r\n\t"
            }, f),
            data: f
        }), (c || 0 === c) && (a += c), a += "\r\n</div>"
    });
    e["serp-google-results"] = a(function(a, b, e, n, f) {
        return this.compilerInfo = [4, ">= 1.0.0"], this.merge(e, a.helpers), '<div class="ebates-serp-results-header">\r\n\t<span class="ebates-serp-results-logo"></span>\r\n\t<span class="ebates-serp-results-title">\r\n\t\t<input type="checkbox" id="ebates-serp-results-filter-checkbox" class="ebates-serp-results-filter-checkbox"><label for="ebates-serp-results-filter-checkbox">Cash Back Results</label>\r\n\t</span>\r\n\t<span class="ebates-serp-results-sort ebates-serp-results-sort-unchecked">\r\n\t\t<input type="checkbox" id="ebates-serp-results-sort-checkbox" class="ebates-serp-results-sort-checkbox"><label for="ebates-serp-results-sort-checkbox">Sort by Cash Back %</label>\r\n\t</span>\r\n\t<div class="ebates-serp-no-results" style="display: none;">There are no results with Cash Back</div>\r\n</div>'
    });
    e["serp-google-shopping"] = a(function(a, b, e, n, f) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        f = f || {};
        var h, k;
        a = "";
        n = this.escapeExpression;
        return a += '<div class="ebates-serp serp-inline" data-cashback="', (k = e.cashBackAmount) ? h = k.call(b, {
            hash: {},
            data: f
        }) : (k = b && b.cashBackAmount, h = "function" === typeof k ? k.call(b, {
            hash: {},
            data: f
        }) : k), a += n(h) + '" data-coupons="', (k = e.totalCoupons) ? h = k.call(b, {
            hash: {},
            data: f
        }) : (k = b && b.totalCoupons, h = "function" === typeof k ? k.call(b, {
            hash: {},
            data: f
        }) : k), a += n(h) +
        '">', (k = e.cashBackAmount) ? h = k.call(b, {
            hash: {},
            data: f
        }) : (k = b && b.cashBackAmount, h = "function" === typeof k ? k.call(b, {
            hash: {},
            data: f
        }) : k), a + (n(h) + " Cash Back</div>")
    });
    e["serp-google-tab"] = a(function(a, b, e, n, f) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        f = f || {};
        var h;
        a = "";
        var k = this.escapeExpression;
        return a += '<div class="hdtb-mitem hdtb-imb ebates-serp-tab">\r\n\t', h = e.unless.call(b, b && b.selected, {
            hash: {},
            inverse: this.noop,
            fn: this.program(1, function(a, b) {
                var f, g, h = "";
                return h += '\r\n\t<a class="q qs" href="',
                (g = e.url) ? f = g.call(a, {
                    hash: {},
                    data: b
                }) : (g = a && a.url, f = "function" === typeof g ? g.call(a, {
                    hash: {},
                    data: b
                }) : g), h + (k(f) + '">\r\n\t')
            }, f),
            data: f
        }), (h || 0 === h) && (a += h), a += '\r\n\t\t<span class="ebates-serp-icon"></span>\r\n\t\t<span>Cash Back Results</span>\r\n\t', h = e.unless.call(b, b && b.selected, {
            hash: {},
            inverse: this.noop,
            fn: this.program(3, function() {
                return "\r\n\t</a>\r\n\t"
            }, f),
            data: f
        }), (h || 0 === h) && (a += h), a += "\r\n</div>"
    });
    e.serp = a(function(a, b, e, n, f) {
        this.compilerInfo = [4, ">= 1.0.0"];
        e = this.merge(e, a.helpers);
        f = f || {};
        var h, k;
        a = "";
        n = this.escapeExpression;
        return a += '<div class="ebates-serp" data-cashback="', (k = e.cashBackAmount) ? h = k.call(b, {
            hash: {},
            data: f
        }) : (k = b && b.cashBackAmount, h = "function" === typeof k ? k.call(b, {
            hash: {},
            data: f
        }) : k), a += n(h) + '" data-coupons="', (k = e.totalCoupons) ? h = k.call(b, {
            hash: {},
            data: f
        }) : (k = b && b.totalCoupons, h = "function" === typeof k ? k.call(b, {
            hash: {},
            data: f
        }) : k), a += n(h) + '"><div class="ebates-serp-icon"></div><span class="ebates-serp-text"><span class="ebates-serp-amount">', (k = e.cashBackAmount) ?
        h = k.call(b, {
            hash: {},
            data: f
        }) : (k = b && b.cashBackAmount, h = "function" === typeof k ? k.call(b, {
            hash: {},
            data: f
        }) : k), a + (n(h) + "</span> Cash Back</span></div>")
    });
    e.walkthrough = a(function(a, b, e, n, f) {
        return this.compilerInfo = [4, ">= 1.0.0"], this.merge(e, a.helpers), '<div class="ebates-explanation ebates-walktrhough">\r\n  <div class="ebates-explanation-text ebates-walktrhough-step2" style="display: none;">\r\n  \tOnce Cash Back is active<br/>\r\n\t\tyou will see a confirmation\r\n\t\t<h4>Try it out!</h4>\r\n\t\t<div id="links">\r\n\t\t\t<a href="http://www.walmart.com" data-storeName="Walmart">www.walmart.com</a>\r\n\t\t\t<a href="http://www.kohls.com" data-storeName="Kohls">www.kohls.com</a>\r\n\t\t\t<a href="http://www.macys.com" data-storeName="Macys">www.macys.com</a>\r\n\t\t</div>\r\n\t</div>\r\n\r\n  <div class="ebates-explanation-text ebates-walktrhough-step1">\r\n\t\t<h4>Activating Cash Back is easy!</h4>\r\n\t\tJust click the Activate button when <br>\r\n\t\tyou are on a store page.\r\n  </div>\r\n</div>'
    })
}();
Handlebars.registerHelper("equal", function(a) {
    for (var e = arguments[arguments.length - 1], g = 1; g < arguments.length - 1; g++)
        if (a === arguments[g])
            return e.fn(this);
    return e.inverse(this)
});
Handlebars.registerHelper("format", function(a, e) {
    return accounting.formatMoney(a, e)
});
Handlebars.registerHelper("markup", function(a) {
    var e = /([\d\.]+)%/g, g = /\$(\d+\.)(\d+)/g;
    e.test(a) ? a = a.replace(e, '<span class="ebates-notification-cashback">$1</span><sup>%</sup>') : g.test(a) && (a = a.replace(g, '<sup>$</sup><span class="ebates-notification-cashback">$1</span><sup>$2</sup>'));
    return new Handlebars.SafeString(a)
});
var EBATES = EBATES || {};
EBATES.Notification = Backbone.View.extend({
    name: "notification",
    category: "Hover",
    page: "hover",
    template: Handlebars.templates.notification,
    showInterval: 5E3,
    events: {
        "click .ebates-notification-close": "closeButtonClick",
        "click .ebates-notification-button-login": "loginButtonClick",
        "click .ebates-notification-button-recommended": "activateButtonClick",
        "click .ebates-notification-button-activate": "activateButtonClick"
    },
    initialize: function(a) {
        this.page = this.page;
        _.extendOwn(this, a)
    },
    activateButtonClick: function() {
        framework.extension.fireEvent("GAEvent", {
            data: {
                url: location.href,
                category: this.category,
                action: "Activate",
                label: Utils.getDomain(window.location.href),
                page: "/" + this.page + "/" + Utils.getDomain(window.location.href)
            }
        });
        EBATES.log({
            event_type: "activate_slider",
            merchant_id: this.model.storeId
        });
        this.hide();
        framework.extension.fireEvent("activate", {
            data: this.model
        })
    },
    closeButtonClick: function() {
        framework.extension.fireEvent("GAEvent", {
            data: {
                url: location.href,
                category: this.category,
                action: "SliderClose",
                label: Utils.getDomain(window.location.href),
                page: "/" + this.page + "/" + Utils.getDomain(window.location.href)
            }
        });
        this.hide();
        this.closeNotification()
    },
    loginButtonClick: function() {
        framework.extension.fireEvent("login", {
            data: this.model
        });
        framework.extension.fireEvent("GAEvent", {
            data: {
                category: this.category,
                action: "Login",
                label: Utils.getDomain(window.location.href),
                page: "/" + this.page + "/" + Utils.getDomain(window.location.href)
            }
        });
        this.closeNotification()
    },
    closeNotification: function() {
        this.model.activated || EBATES.log({
            event_type: "close",
            merchant_id: this.model.storeId
        });
        this.model[this.name]=!1;
        framework.extension.fireEvent("set",
        {
            data: this.model
        })
    },
    render: function() {
        var a = this;
        $('<link href="' + (0 === location.protocol.indexOf("http") ? "" : "http:") + '//fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" type="text/css">').appendTo(document.head);
        EBATES.cssInjected || (EBATES.cssInjected=!0, "undefined" !== typeof injectCSS && injectCSS());
        (this.model.activated || 2 == this.model.activationCode) && framework.extension.fireEvent("closeNotification", {
            data: this.model
        });
        this.setElement($(this.template(this.model)).appendTo(document.documentElement));
        this.$el.css({
            opacity: 0,
            top: "-20px"
        }).transition({
            top: "10px",
            opacity: 1,
            duration: 500,
            easing: "snap",
            complete: function() {
                a.model.activated ? 2 != a.model.activationCode && a.showInterval && window.setTimeout(function() {
                    a.hide();
                    a.closeNotification()
                }, a.showInterval) : (EBATES.log({
                    event_type: "slider_open",
                    merchant_id: a.model.storeId
                }), framework.extension.fireEvent("GAPage", {
                    data: {
                        page: "/" + a.page + "/" + (a.model.loggedIn ? "" : "loggedout/") + Utils.getDomain(window.location.href),
                        title: a.model.loggedIn ? "Slider": "Slider Logged Out"
                    }
                }))
            }
        });
        return this.$el
    },
    hide: function() {
        var a = this;
        this.$el.transition({
            opacity: 0,
            top: "-20px",
            duration: 500,
            easing: "snap",
            complete: function() {
                a.remove()
            }
        })
    }
});
EBATES.NotificationTooltip = Backbone.View.extend({
    template: Handlebars.templates["notification-explanation"],
    HIDE_TIMEOUT: 1E4,
    hide: function() {
        var a = this;
        this.$el.css({
            opacity: 0
        });
        _.delay(function() {
            a.remove()
        }, 1E3);
        framework.extension.setItem("notification-explanation", 0)
    },
    show: function() {
        this.$el.css({
            opacity: 1
        });
        framework.extension.fireEvent("GAEvent", {
            data: {
                category: "Onboarding",
                action: "HoverUX",
                label: "Existing Users",
                page: "/hover/" + Utils.getDomain(window.location.href)
            }
        })
    },
    initialize: function() {
        var a =
        this;
        $(document.documentElement).one("click", function() {
            a.hide()
        })
    },
    render: function() {
        var a = this;
        $('<link href="' + (0 === location.protocol.indexOf("http") ? "" : "http:") + '//fonts.googleapis.com/css?family=PT+Sans:400italic" rel="stylesheet" type="text/css">').appendTo(document.head);
        this.setElement($(this.template(this.model)).appendTo(document.documentElement));
        _.delay(function() {
            a.show()
        }, 200);
        a.HIDE_TIMEOUT && _.delay(function() {
            a.hide()
        }, a.HIDE_TIMEOUT);
        return this.$el
    }
});
EBATES = EBATES || {};
EBATES.CAA = EBATES.CAA || {};
EBATES.CAA.module = function(a) {
    function e(a) {
        if (a)
            return a = (a + "").replace(",", "").replace(/[^\d\.\n]/g, ""), parseFloat(a)
    }
    function g(a, b) {
        d.rules.apply.response && "discount" === d.rules.apply.response.type ? (a.discount = e(n(d.rules.apply.response.discount, b)) || 0, 0 != a.discount ? a.total = u - w[y].discount : (a.total = e(n(d.rules.controls.total, b)) || u, a.discount = u - a.total)) : (a.total = e(n(d.rules.controls.total, b)) || u, a.discount = u - a.total);
        return a
    }
    function b(a, b, d) {
        var c = a;
        b && (a = b.split("//"), $.each(a, function(a, b) {
            if (c)
                c =
                c[b];
            else 
                return !1
        }));
        return c ? e(c) : d || 0
    }
    function m(a, c, f, h) {
        if (d.rules.apply.response)
            switch (d.rules.apply.response.type) {
            case "json":
                d.rules.apply.response.discount ? (a.discount = b(c, d.rules.apply.response.discount), a.discount ? a.total = u - a.discount : (a.total = b(c, d.rules.apply.response.total, u), a.discount = u - a.total)) : (a.total = b(c, d.rules.apply.response.total, u), a.discount = u - a.total);
                h(a);
                break;
            case "string":
                try {
                    "string" != typeof c && (c = JSON.stringify(c))
                } catch (k) {}
                d.rules.apply.response.discount ? (f = new RegExp(d.rules.apply.response.discount,
                "gim"), (c = f.exec(c)) && c.length && (a.discount = e(c.pop()), a.total = u - a.discount)) : (f = new RegExp(d.rules.apply.response.total, "gim"), (c = f.exec(c)) && c.length && (a.total = e(c.pop()), a.discount = u - a.total));
                h(a);
                break;
            case "html":
                h(g(a, f.responseText));
                break;
            case "reload":
                $.ajax({
                    url: location.href,
                    success: function(b, c, d) {
                        h(g(a, d.responseText))
                    },
                    error: function() {
                        h(null)
                    }
                })
        } else 
            h(g(a, $.parseHTML(c)))
        }
    function n(a, b) {
        var c = b || document.body;
        if ("string" == typeof a)
            return _.reduce($(c).find(a).map(function() {
                return e($(this).text())
            }),
            function(a, b) {
                return a + (b || 0)
            }, 0);
        if (a.rx && a.selector) {
            var c = $(c).find(a.selector).text(), d = new RegExp(a.rx);
            if ((d = $.trim(c).match(d)) && 0 < d.length)
                return d.pop()
        } else if (a.rx && (d = new RegExp(a.rx), (d = $.trim(c.replace(/\n/g, "")).match(d)) && 0 < d.length))
            return d.pop()
    }
    function f(a) {
        var b =- 1, d = 0;
        $.each(w, function(a, c) {
            c.discount && c.discount > d && (b = a, d = c.discount)
        });
        return w[b]
    }
    function h(a) {
        "string" === typeof a && (a = a.replace("%promo", w[y].code));
        return a
    }
    function k(a) {
        var b = document.createElement("script");
        b.innerText ? b.innerText = a : b.text = a;
        document.body.appendChild(b)
    }
    function c(a, b) {
        var c = 0, e = $(d.rules.controls.promo).focus(), f = window.setInterval(function() {
            a[c] ? (v("focus", e.get(0)), e.val(a[c].code), C(d.rules.apply.submit), c++) : (window.clearInterval(f), b && b())
        }, d.rules.apply.timeout || 1500)
    }
    function l() {
        var a = n(d.rules.controls.currency || {
            selector: d.rules.controls.total,
            rx: "(.*?)[\\d\\s]"
        }, document.body);
        d.currency = a ? a : "$";
        d.total = u;
        d.orderTotal = H;
        if (d.rules.stacking) {
            if (d.discount = _.reduce(w, function(a,
            b) {
                return a + b.discount
            }, 0), 0 < d.discount)
                if (d.coupons = _.sortBy(_.filter(w, function(a) {
                    return !!a.discount
                }), "dscount"), 1 === d.coupons.length)
                    d.coupon = d.coupons.pop();
                else if ("number" === typeof d.rules.stacking) {
                    d.coupons = d.coupons.slice(0, d.rules.stacking);
                    c(d.coupons, function() {
                        r.success && r.success(d)
                    });
                    return 
                }
        } else if (F = 0 < w.length && f(u))
            d.coupon = F, d.discount = F.discount;
        $(d.rules.controls.promo).val("");
        r.success && r.success(d)
    }
    function p(a, b) {
        if (a.code) {
            var c = $(d.rules.controls.promo).focus().val(a.code);
            c.length || r.log("Coupon field was not found");
            v("focus", c.get(0));
            switch (d.rules.apply.type) {
            case "click":
                C(d.rules.apply.submit);
                b || (B = window.setInterval(q, d.rules.apply.timeout || 1500));
                break;
            case "enter":
                var e = $(d.rules.apply.submit).get(0);
                v("keydown", e, 13);
                v("keypress", e, 13);
                v("keyup", e, 13);
                b || (B = window.setInterval(q, d.rules.apply.timeout || 1500));
                break;
            case "js":
                k(d.rules.apply.js);
                b || (B = window.setInterval(q, d.rules.apply.timeout || 1500));
                break;
            case "submit":
                if (b)
                    C(d.rules.apply.submit);
                else {
                    "string" ==
                    typeof d.rules.apply.form ? e = $(d.rules.apply.form) : "object" == typeof d.rules.apply.form && (e = $(d.rules.apply.form.selector));
                    c = e.find("input[name][value][type!='radio'][type!='checkbox'][type!='submit'][type!='image']").add("input[name][value][type='radio']:checked").add("input[name][value][type='checkbox']:checked").add("select[name]").add(d.rules.apply.submit).map(function() {
                        if (this.getAttribute("name")) {
                            var a = this.getAttribute("name");
                            if (d.rules.apply.data && "object" == typeof d.rules.apply.data) {
                                if (d.rules.apply.data[a]) {
                                    var b =
                                    encodeURIComponent(h(d.rules.apply.data[a]));
                                    delete d.rules.apply.data[a];
                                    return encodeURIComponent(a) + "=" + b
                                }
                                if (null === d.rules.apply.data[a])
                                    return null
                            }
                            return encodeURIComponent(a) + "=" + encodeURIComponent(this.value)
                        }
                        return null
                    }).get().join("&");
                    d.rules.apply.data && ("string" == typeof d.rules.apply.data ? c += "&" + h(d.rules.apply.data) : "object" == typeof d.rules.apply.data && (c += "&" + $.map(d.rules.apply.data, function(a, b) {
                        return null != a ? b + "=" + h(a) : null
                    }).join("&")));
                    $.support.cors=!0;
                    var f = d.rules.apply.form.url ||
                    e.attr("action") || "";
                    0 === f.indexOf("javascript:") && (f = location.href);
                    $.ajax({
                        type: e.attr("method") || "POST",
                        url: f,
                        data: c,
                        success: function(a, b, c) {
                            r.log("Request success", a);
                            D || m(w[y], a, c, function() {
                                x()
                            })
                        },
                        error: function(a) {
                            r.log("Request failed", a);
                            D || (y++, t())
                        }
                    })
                }
                break;
            case "post":
            case "get":
                b ? C(d.rules.apply.submit) : ($.support.cors=!0, c = "", d.rules.apply.data && ("string" == typeof d.rules.apply.data ? c = h(d.rules.apply.data) : "object" == typeof d.rules.apply.data && (c = $.map(d.rules.apply.data, function(a, b) {
                    return null !=
                    a ? b + "=" + h(a) : null
                }).join("&"))), $.ajax({
                    type: d.rules.apply.type,
                    url: d.rules.apply.url.replace("%promo", a.code),
                    data: c,
                    contentType: d.rules.apply.contentType,
                    dataType: d.rules.apply.response ? d.rules.apply.response.type: null,
                    success: function(a, b, c) {
                        r.log("Request success", a);
                        D || m(w[y], a, c, function() {
                            x()
                        })
                    },
                    error: function(a) {
                        r.log("Request failed", a);
                        D || (y++, t())
                    }
                }))
            }
        } else 
            y++, t()
    }
    function q() {
        if (!d.rules.apply.wait || $(d.rules.apply.wait).length) {
            window.clearInterval(B);
            var a = d.rules.controls.error ? $(d.rules.controls.error):
            null;
            a && a.length ? (r.log(a), $(d.rules.controls.promo).val(""), z(a)) : (g(w[y]), x())
        }
    }
    function x(a) {
        if (d.rules.remove)
            switch (r.progress && r.progress(d, "revoke"), iRevokeStep = a || 0, d.rules.remove = [].concat(d.rules.remove), E = window.setInterval(function() {
                if (iRevokeStep == d.rules.remove.length - 1)
                    window.clearInterval(E), y++, t();
                else if (!d.rules.remove[iRevokeStep].wait || $(d.rules.remove[iRevokeStep].wait).length)
                    window.clearInterval(E), x(iRevokeStep + 1)
                }, d.rules.remove[iRevokeStep].timeout || 1500), d.rules.remove[iRevokeStep].type) {
                case "click":
                    C(d.rules.remove[iRevokeStep].submit);
                    break;
                case "js":
                    k(h(d.rules.remove[iRevokeStep].js));
                    break;
                case "get":
                case "post":
                    $.support.cors=!0;
                    $.ajax({
                        type: d.rules.remove[iRevokeStep].type,
                        url: h(d.rules.remove[iRevokeStep].url)
                    });
                    break;
                case "submit":
                    if ("string" == typeof d.rules.remove[iRevokeStep].form)
                        var b = $(d.rules.remove[iRevokeStep].form);
                    else 
                        "object" == typeof d.rules.remove[iRevokeStep].form && (b = $(d.rules.remove[iRevokeStep].form.selector));
                        a = (d.rules.remove[iRevokeStep].data ? h(d.rules.remove[iRevokeStep].data) + "&" : "") + b.find("input[name][value][type!='radio'][type!='checkbox'][type!='submit'][type!='image']").add("input[name][value][type='radio']:checked").add("input[name][value][type='checkbox']:checked").add("select[name]").add(d.rules.remove[iRevokeStep].submit).map(function() {
                            return this.getAttribute("name") ?
                            this.getAttribute("name") + "=" + encodeURIComponent(this.value) : null
                        }).get().join("&");
                        $.support.cors=!0;
                        $.ajax({
                            type: b.attr("method") || "POST",
                            url: b.attr("action"),
                            data: a
                        })
                } else 
                    d.rules.stacking && (u = d.rules.controls.total && e(n(d.rules.controls.total)) || u), y++, t()
    }
    function t() {
        d.index = y;
        d._coupons = w;
        var a = d.rules.controls.error ? $(d.rules.controls.error): null;
        a && a.length && 0 !== y ? ($(d.rules.controls.promo).val(""), z()) : y < w.length ? (r.progress && r.progress(d, "apply"), p(w[y])) : l()
    }
    function z(a) {
        D=!0;
        E && window.clearInterval(E);
        B && window.clearInterval(B);
        r.stop && r.stop(d, a)
    }
    function A() {
        if ((d.rules.controls.form && $(d.rules.controls.form).length || $(d.rules.controls.promo).length) && $(d.rules.controls.total).length&&!I) {
            if (d.rules.conditions && d.rules.conditions.required && ($.extend($.expr[":"], {
                blank: function(a) {
                    return $(a).val().match(/^\s*$/)
                }
            }), $([].concat(d.rules.conditions.required).join(", ")).filter(":blank").length))
                return;
            I=!0;
            window.clearInterval(G);
            r.init && r.init(d)
        } else 
            r.debug && (d.rules.controls.form&&!$(d.rules.controls.form).length &&
            r.log("Form Field is not found", d.rules.controls.form), $(d.rules.controls.promo).length || r.log("Promo Field is not found", d.rules.controls.promo), $(d.rules.controls.total).length || r.log("Total Field is not found", d.rules.controls.total), d.rules.controls.orderTotal&&!$(d.rules.controls.orderTotal).length && r.log("OrderTotal Field is not found", d.rules.controls.orderTotal), window.clearInterval(G))
    }
    function C(a) {
        var b = $(a).get(0);
        b ? (v("mouseover", b), v("mousedown", b), v("click", b), v("mouseup", b), v("focus",
        b)) : r.log("Node is not found", a)
    }
    function v(a, b, c) {
        if (b) {
            var d = $(b), e = d.offset(), f;
            switch (a) {
            case "click":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "mouseup":
            case "scroll":
                d.removeAttr("disabled");
                f = document.createEvent("MouseEvents");
                f.initMouseEvent(a, !0, !0, window, 0, e.left, e.top, e.left, e.top, !1, !1, !1, !1, 0, null);
                break;
            case "keydown":
            case "keypress":
            case "keyup":
                f = document.createEvent("KeyboardEvent");
                f.initKeyboardEvent(a, !0, !0, window, c, 1, !1, !1, !1, !1,
                !1);
                break;
            case "change":
            case "focus":
            case "blur":
            case "select":
            case "submit":
            case "input":
                f = document.createEvent("HTMLEvents"), f.initEvent(a, !0, !0)
            }
            b.dispatchEvent(f)
        }
    }
    var d = this, D=!1, J = document.location.toString().toLowerCase(), G = null, y = 0, I=!1, K = a.config, w = _.uniq(_.filter(a.coupons, function(a) {
        return !!a.code
    }), function(a) {
        return a.code
    }), u, H, F, B, E;
    d.rules = null;
    d.index = null;
    d._coupons = w;
    d._coupon = null;
    d.currency = null;
    if (0 === w.length)
        return !1;
    $.each(K, function(a, b) {
        $.each([].concat(b.url), function(a,
        c) {
            if (0 <= J.search(new RegExp(c, "i")))
                return d.rules = b, G = window.setInterval(function() {
                    A.apply(d)
                }, 500), !1
        })
    });
    var r = $.extend({
        init: null,
        progress: null,
        success: null,
        log: function() {}
    }, a);
    d.start = function() {
        u = u || d.rules.controls.total && e(n(d.rules.controls.total));
        H = d.rules.controls.orderTotal && e(n(d.rules.controls.orderTotal)) || u;
        if (d.rules.controls.form && $(d.rules.controls.form).length&&!$(d.rules.controls.promo).length) {
            var a = $(d.rules.controls.form).get(0);
            _.delay(function() {
                v("focus", a);
                v("mousemove",
                a);
                v("mouseover", a);
                v("mousedown", a);
                v("mouseup", a);
                v("click", a);
                v("focus", a);
                _.delay(t, 2500)
            }, 500, a)
        } else 
            t()
    };
    d.stop = function() {
        z()
    };
    d.finishing = function() {
        d.rules.stacking || p(F, !0)
    }
};
EBATES = EBATES || {};
EBATES.CAA = EBATES.CAA || {};
EBATES.CAA.stat = function(a) {
    framework.extension.fireEvent("GAEvent", {
        data: $.extend({
            url: location.href,
            category: "CAA",
            label: EBATES.getDomain(window.location.href)
        }, a)
    })
};
EBATES.CAA.close = function(a) {
    $(".ebates-coupon-overlay-background").remove()
};
EBATES.CAA.createButton = function(a, e, g) {
    function b() {
        t()
    }
    function m() {
        framework.extension.setItem("CAA-reviewed", 2);
        EBATES.CAA.stat({
            action: "Click Review"
        })
    }
    function n() {
        EBATES.CAA.stat({
            action: "Cancel"
        });
        t()
    }
    function f() {
        z();
        t()
    }
    function h(a) {
        EBATES.CAA.stat({
            action: "Click Link Copy"
        });
        EBATES.log({
            event_type: "taf_copy_link_coupon"
        });
        var b = $(a.currentTarget);
        a = $(a.currentTarget).find("input");
        framework.extension.fireEvent("CopyToClipboard", {
            data: a.val()
        });
        b.find(".arrow-box").fadeIn();
        b.find(".copylink-button").text("Copied");
        _.delay(function() {
            b.find(".arrow-box").fadeOut();
            b.find(".copylink-button").text("Copy")
        }, 3E3)
    }
    function k() {
        EBATES.CAA.stat({
            action: "Click Twitter"
        });
        EBATES.log({
            event_type: "taf_twitter_coupon"
        });
        l("https://twitter.com/intent/tweet?" + $.param({
            text: "I get cash back when I buy things online with @Ebates You'll also get a $10 gift card after signing up. " + $(".ebates-coupon-form .copylink input").val()
        }), 550, 400)
    }
    function c() {
        EBATES.CAA.stat({
            action: "Click Facebook"
        });
        EBATES.log({
            event_type: "taf_facebook_coupon"
        });
        l("http://www.facebook.com/dialog/send?" + $.param({
            display: "Safari" === framework.browser.name ? "page": "popup",
            app_id: 0xc2ee9ccb8e0a,
            link: $(".ebates-coupon-form .copylink input").val(),
            redirect_uri: "http://www.ebates.com/toolbar/taf/taf.html"
        }), 650, 480)
    }
    function l(a, b, c) {
        "Safari" === framework.browser.name ? (framework.browser.navigate({
            url: a,
            tabId: framework.browser.NEWTAB
        }), window.close()) : (b = b || 550, c = c || 400, window.open(a, "Ebates", "width=" + b + ", height=" + c + ",left=" + (screen.availWidth - b) / 2 + ",top=" + (screen.availHeight -
        c) / 2))
    }
    function p() {
        A.animate({
            top: "-110px"
        }, {
            duration: 500,
            complete: function() {
                A.hide()
            }
        })
    }
    EBATES.cssInjected || (EBATES.cssInjected=!0, "undefined" !== typeof injectCSS && injectCSS());
    var q = a._coupons, x = a.start, t = a.stop, z = a.finishing;
    $('<link href="//fonts.googleapis.com/css?family=Roboto:400,700,500|Open+Sans:400,600" rel="stylesheet" type="text/css">').appendTo(document.head);
    var A = $(Handlebars.templates["coupons-slider"]({
        merchant: g,
        coupons: q
    })).appendTo(document.documentElement).css({
        top: "-118px"
    }).animate({
        top: "0px"
    },
    {
        duration: 500
    });
    $(".ebates-coupons-button", A).on("click", function() {
        p();
        EBATES.CAA.stat({
            action: "Apply Coupon",
            value: q.length
        });
        $(Handlebars.templates["coupons-form"]({
            merchant: g,
            coupons: q
        })).appendTo(document.documentElement).on("click", ".ebates-coupons-button-review", m).on("click", ".ebates-coupons-button-cancel", n).on("click", ".ebates-coupons-button-close", b).on("click", ".ebates-coupons-button-apply", f).on("click", ".ebates-coupon-form .copylink", h).on("click", ".ebates-coupon-form .import-button.twitter",
        k).on("click", ".ebates-coupon-form .import-button.facebook", c).show();
        x()
    });
    $(".ebates-coupons-close", A).on("click", p);
    EBATES.CAA.stat({
        action: "Display Coupon"
    })
};
EBATES.CAA.progress = function(a) {
    var e = a.index, g = a._coupons, b = a.rules;
    a = e + 1;
    b = _.reduce(_.pluck([].concat(b.apply || []).concat(b.remove || []), "timeout"), function(a, b) {
        return a + b || 500
    }, 0) || 1E3;
    $(".ebates-coupon-index").text(a);
    $(".ebates-coupon-code").text(g[e].code);
    $(".ebates-coupon-loader").stop().css({
        width: Math.round(e / g.length * 100) + "%"
    }).animate({
        width: Math.round(a / g.length * 100) + "%"
    }, b)
};
EBATES.CAA.showResults = function(a, e) {
    a.merchant = e;
    a.cashback = e.cashBackAmount;
    if (a.coupon || a.coupons)
        a.coupons && (a.codes = _.pluck(a.coupons, "code").join(", ")), EBATES.CAA.stat({
            action: "Coupon Success",
            value: Math.round(a.discount)
        }), framework.extension.getItem("CAA-reviewed", function(b) {
            var g = {
                event_type: "coupon_magic",
                merchant_id: e.storeId,
                offer_success: !0,
                offer_id: a.coupons ? _.pluck(a.coupons, "id").join(", "): a.coupon.id,
                amount_saved: a.discount,
                amount_total: a.orderTotal
            };
            e.activated ? 2 > (b || 0) && "Safari" !=
            framework.browser.name ? (EBATES.CAA.stat({
                action: "Display Review Screen",
                value: Math.round(a.discount)
            }), framework.extension.setItem("CAA-reviewed", (b || 0) + 1), $(".ebates-coupon-form").html($(Handlebars.templates["coupons-form-review"](_.extend(a, {
                browser: framework.browser.name
            }))))) : (g.event_type = "taf_page_view_coupon", EBATES.CAA.stat({
                action: "Display TAF Screen",
                value: Math.round(a.discount)
            }), framework.extension.fireEvent("getAccount", {
                data: null
            }, function(b) {
                $(".ebates-coupon-form").html($(Handlebars.templates["coupons-form-taf"](_.extend(a,
                {
                    user: b
                }))))
            })) : $(".ebates-coupon-form").html($(Handlebars.templates["coupons-form-success"](a)));
            EBATES.log(g)
        });
    else {
        EBATES.CAA.stat({
            action: "No Working Coupons"
        });
        EBATES.log({
            event_type: "coupon_magic",
            merchant_id: e.storeId,
            offer_success: !1,
            amount_total: a.orderTotal
        });
        var g = /^(up to )?([\d\.]+)%/i.exec(e.cashBackAmount);
        g && g[2] && (a.cashback = (g[1] || "") + a.currency + (a.orderTotal * (parseFloat(g[2]) / 100)).toFixed(2));
        $(".ebates-coupon-form").html($(Handlebars.templates["coupons-form-error"](a)))
    }
};
EBATES = EBATES || {};
EBATES.DEBUG=!1;
EBATES.injection = null;
EBATES.cssInjected=!1;
EBATES.timestamp = _.now();
EBATES.errors = [];
$(window).on("error", function(a) {
    EBATES.errors.push(a.originalEvent.message)
});
EBATES.getDomain = function(a) {
    return a ? (a = /(?:https?:\/\/)?(?:\w+:\/)?[^:?#\/\s]*?([^.\s]+\.(?:[a-z]{2,}|co\.uk|org\.uk|ac\.uk|org\.au|com\.au))(?:[:?#\/]|$)/gi.exec(a)) ? a[1] : null : null
};
EBATES.checkConfirmation = function(a) {
    for (var e = "www.macys.com/chkout/confirm www-secure.target.com/checkout_processconfirmation secure.nordstrom.com/OrderConfirmation.aspx\\?ordernum www.sephora.com/profile/orderConfirmation/orderConfirmation www.kohls.com/checkout/v2/order_confirm www.walmart.com/wmflows/checkout\\?step=[a-zA-Zd]*&_eventId=success&v=rtccView_success www.sears.com/shc/s/OrderConfirmationDisplayView www.joesnewbalanceoutlet.com/co/checkout_payment.htm www.staples.com/office/supplies/easycheckoutorderconf www.uggaustralia.com/on/demandware.store/Sites-UGG-US-Site/default/COSummary-Submit www.aeropostale.com/checkout/index.jsp\\?process=thanks www.lacoste.com/us/checkout-validate secure.rakuten.com/CO/Receipt/Receipt.aspx www.tillys.com/checkout/confirmResponse.jsp www.walmart.com/checkout/thankyou www.groupon.com/receipt www.lowes.com/webapp/wcs/stores/servlet/OrderOKView www.qvc.com/webapp/wcs/stores/servlet/NPOOrderOKView www-ssl.bestbuy.com/site/olspage.jsp www.jcpenney.com/dotcom/jsp/checkout/secure/orderConfirmation.jsp www.neimanmarcus.com/checkout/ordercomplete.jsp www.saksfifthavenue.com/checkout/checkout.jsp#processReview|www.saksfifthavenue.com/checkout/checkout.jsp?bmForm=paypal_callback www.bloomingdales.com/chkout/confirm www.keurig.com/checkout/orderConfirmation www.drugstore.com/checkout/order_feedback.asp secure-store.nike.com/us/checkout/html/confirm.jsp www.jcrew.com/checkout2/review.jsp www.vitacost.com/CheckOut/Confirmation.aspx|www.vitacost.com/MyAccount/OrderSummary.aspx www.kmart.com/+crsp/mx/confirmation|mobilecheckout.kmart.com/.*#/confirmation".split(" "), g =
    0; g < e.length; g++)
        if ((new RegExp(e[g])).test(location.href)) {
            framework.extension.fireEvent("GAPage", {
                data: {
                    page: "/ub/" + EBATES.getDomain(window.location.href) + "/" + (a.activated ? "active" : "inactive") + "/order-confirmation",
                    title: a.site_name + "-" + (a.activated ? "active" : "inactive") + "-order-confirmation"
                }
            });
            framework.extension.fireEvent("CaptureOrderPage", {
                data: {
                    content: document.documentElement.innerHTML,
                    load_time: _.now() - EBATES.timestamp,
                    javascript_error: !!EBATES.errors.length,
                    merchant: a
                }
            });
            break
        }
};
EBATES.checkAmazonConfirmation = function() {
    if ("amazon.com" === EBATES.getDomain(location.href))
        $("body").on("click", '#oneClickBuyButton, #one-click-button, #oneClickCartButton, .place-your-order-button, [name^="placeYourOrder"]', function() {
            var a = _.findIndex(["amazon.com/gp/product/", "amazon.com/gp/buy/spc/", "amazon.com/gp/cart/"], function(a) {
                return 0 <= location.href.indexOf(a)
            });
            if (0 <= a) {
                var e = $(document.documentElement).clone();
                e.find("header, script, style, noscript, .a-declarative, .prime-ad-banner-content, #spc-top, #cbcc_banner_container, #prime_feature_div, .a-dropdown-container:contains(Ship to), #unifiedLocation_feature_div, .popover-gift-center, #sc-rec-bottom, #sc-rec-right, #shipaddress, #payment").remove();
                framework.extension.fireEvent("getAccount", {
                    data: null
                }, function(g) {
                    framework.extension.fireEvent("uploadFile", {
                        data: {
                            filename: "<user_id>_<merchant_id>_<page_type>_<extension_type>_<tripid>_<timestamp>.html".replace("<merchant_id>", 1).replace("<user_id>", g.id).replace("<page_type>", a + 1).replace("<extension_type>", framework.browser.name.charAt(0)).replace("<tripid>", 0).replace("<timestamp>", _.now()),
                            path: "",
                            content: e.html()
                        }
                    })
                })
            }
        })
};
EBATES.log = function(a) {
    framework.extension.fireEvent("InternalLoggingEvent", {
        data: a
    })
};
EBATES.init = function() {
    (0 < location.href.indexOf("www.ebates.com/logonUserServicesStartupAction.do") || 0 < location.href.indexOf("www.ebates.com/toolbar/shopping/1/postInstallAction.do") || 0 < location.href.search("www.ebates.com/.*/install/success.htm") || 0 < location.href.search("www.ebates.com/.*-xfas") || 0 < location.href.search(/www\.ebates\.com\/(\w+\/)?index\./)) && $(document).ready(function() {
        var a = $("meta[name='autoLoginId']").attr("content");
        a ? framework.extension.fireEvent("autoLoginId", {
            data: a
        }) : (a =
        $("head").text().match(/toolbar\.Options\.Authenticated\(unescape\('(.*?)'\),/)) && framework.extension.fireEvent("autoLoginId", {
            data: a.pop()
        });
        (a = $("meta[name='trackingTicketNumber']").attr("content")) && framework.extension.fireEvent("trackingTicketNumber", {
            data: a
        })
    });
    framework.extension.fireEvent("getTests", {
        data: null
    }, function(a) {
        EBATES.tests = a || {}
    });
    framework.extension.fireEvent("getMerchant", {
        data: {
            url: location.href,
            referrer: document.referrer
        }
    }, function(a) {
        a && (a.blacklisted ? a.notification && a.activated &&
        (a.notification=!1, framework.extension.fireEvent("set", {
            data: a
        })) : (!a.notification || a.suppressed ||!a.activated && 5 == a.activationCode || ((new EBATES.Notification({
            model: a,
            template: Handlebars.templates.notification,
            category: "Hover",
            page: "hover"
        })).render(), !a.activated && a.loggedIn && framework.extension.getItem("notification-explanation", function(a) {
            a && (new EBATES.NotificationTooltip).render()
        })), a.activationCode && 2 !== a.activationCode && framework.extension.fireEvent("getCouponsConfig", {}, function(e) {
            if (a.activated ||
            EBATES.DEBUG)
                framework.extension.fireEvent("getDeals", {
                    data: a
                }, function(g) {
                    EBATES.DEBUG && 0 === _.filter(g, function(a) {
                        return a.code
                    }).length && g.push({
                        code: "TEST"
                    });
                    new EBATES.CAA.module({
                        coupons: g,
                        config: e,
                        init: function(b) {
                            (a.activated || EBATES.DEBUG) && EBATES.CAA.createButton(b, b.rules, a)
                        },
                        progress: function(b, e) {
                            "apply" === e && EBATES.CAA.progress(b, a)
                        },
                        success: function(b) {
                            EBATES.CAA.showResults(b, a)
                        },
                        stop: function(b, e) {
                            EBATES.CAA.close();
                            e && EBATES.CAA.createButton(b, b.rules, a)
                        }
                    })
                });
            else if (!a.notification &&
            a["notification-reminder"] && _.chain(e).pluck("url").flatten().find(function(a) {
                return 0 <= window.location.href.search(a)
            }).value())
                return (new EBATES.Notification({
                    model: a,
                    name: "notification-reminder",
                    template: Handlebars.templates["notification-reminder"],
                    category: "Hover - Reminder",
                    page: "hover/reminder"
                })).render(), !1
        })), EBATES.checkConfirmation(a));
        EBATES.checkAmazonConfirmation()
    });
    0 === location.host.search(/(?:www\.)ebates\./) && ("http://www.ebates.com/toolbar/taf/taf.html#_=_" === location.href && window.close(),
    framework.extension.getItem("toolbarId", function(a) {
        $("head").append('<ebatesToolbar toolbarVersion="' + framework.extension.version + '" toolbarId="' + a + '" date="' + moment().format("YYYY-MM-DD HH:mm:ss.SSSZZ") + '"></ebatesToolbar>')
    }))
};
if (window.self === window.top && framework)
    if (framework.extension.attachEvent("getCanonicalURL", function(a, e) {
        e($("link[rel='canonical']").attr("href"))
    }), "Chrome" === framework.browser.name) {
        if (0 === location.href.indexOf("http") && window.locationbar && window.locationbar.visible ||!window.locationbar)
            $(EBATES.init), framework.extension.attachEvent("showNotification", function(a) {
                EBATES.injection = new EBATES.Injection(a.data);
                EBATES.injection.show()
            }), framework.extension.attachEvent("checkPopup", function(a, e) {
                e(window.locationbar &&
                !window.locationbar.visible)
            })
    } else 
        "Internet Explorer" === framework.browser.name ? EBATES.init() : (window.menubar && window.menubar.visible ||!window.menubar) && $(EBATES.init);
EBATES = EBATES || {};
EBATES.SERP = {};
EBATES.SERP.PageView = Backbone.View.extend({
    el: "body",
    findLinks: function(a) {
        var e = this;
        a && ($(a).find(e.model.pattern).filter(":not([ebates-serp-link])").each(function() {
            new EBATES.SERP.LinkView({
                eventName: "SERPClickTitle",
                el: this,
                model: e.model,
                template: e.model.template ? Handlebars.templates[e.model.template]: Handlebars.templates.serp
            })
        }), $(a).find(e.model.links).filter(":not([ebates-serp-link])").each(function() {
            new EBATES.SERP.LinkView({
                eventName: "SERPClickResult",
                el: this,
                model: e.model
            })
        }))
    },
    initialize: function() {
        var a =
        this;
        (new MutationObserver(function(e) {
            e.forEach(function(e) {
                a.findLinks(e.target)
            })
        })).observe(document.body, {
            attributes: !1,
            childList: !0,
            subtree: !0,
            characterData: !1
        });
        this.findLinks(document.body);
        this.render()
    },
    render: function() {
        injectCSS();
        "google" === this.model.domain && new EBATES.SERP.FilterView({
            model: this.model
        })
    }
});
EBATES.SERP.LinkView = Backbone.View.extend({
    eventName: "SERPClickTitle",
    merchant: null,
    mode: "",
    events: {
        click: function(a) {
            this.merchant && (EBATES.log({
                event_type: "serp_click_hit",
                merchant_id: this.model.storeId,
                destination: this.href
            }), framework.extension.fireEvent("GAEvent", {
                data: {
                    category: Utils.getDomain(this.href),
                    action: this.eventName,
                    label: this.getSearchTerm(),
                    page: "/serp/" + this.model.domain
                }
            }), a.stopPropagation())
        }
    },
    getSearchTerm: function() {
        return decodeURIComponent((new RegExp(this.model.rx)).exec(document.location.href).pop().replace(/\+/g,
        " "))
    },
    initialize: function(a) {
        var e = this;
        _.extendOwn(this, a);
        this.$el.attr("ebates-serp-link", !0);
        this.href = this.$el.attr("data-href") || this.$el.attr("href");
        this.model.href && (a = this.href.match(new RegExp(this.model.href))) && 1 < a.length && (this.href = decodeURIComponent(a.pop()));
        framework.extension.fireEvent("getStore", {
            data: {
                url: this.href
            }
        }, function(a) {
            a && 5 != a.activationCode && 2 != a.activationCode && (e.merchant = a, e.render(a))
        })
    },
    render: function(a) {
        var e = this;
        this.model.hasResults || (EBATES.log({
            event_type: "serp_display",
            domain: this.model.domain
        }), framework.extension.fireEvent("GAPage", {
            data: {
                page: "/serp/" + this.model.domain
            }
        }), this.model.hasResults=!0);
        this.template && $(this.template(a))[this.model.injection || "prependTo"](this.$el).click(function(g) {
            EBATES.log({
                event_type: "serp_click_hit",
                merchant_id: a.storeId,
                destination: e.href
            });
            framework.extension.fireEvent("GAEvent", {
                data: {
                    category: Utils.getDomain(e.href),
                    action: "SERPClickCTA" + e.mode,
                    label: e.getSearchTerm(),
                    page: "/serp/" + e.model.domain
                }
            });
            g.stopPropagation()
        });
        return this.$el
    }
});
EBATES.SERP.FilterView = Backbone.View.extend({
    MAX_PAGE_LOAD: 5,
    events: {
        "change .ebates-serp-results-sort-checkbox": function(a) {
            this.serpResultsSort()
        },
        "change .ebates-serp-results-filter-checkbox": function(a) {
            (a = a.currentTarget.checked) && this.pageLoaded < this.MAX_PAGE_LOAD && (this.$(".ebates-serp-results-sort-checkbox").is(":checked") && this.serpResultsSort(), this.$(".ebates-serp-results-sort-checkbox").prop("checked", !1), this.$(".ebates-serp-results-sort-checkbox").prop("disabled", !0), this.$(".ebates-serp-results-sort-checkbox").parent().find("label").css("color",
            "#aaa"));
            $(".srg .g [data-index]").removeAttr("data-index");
            this.filterResults(a)
        }
    },
    serpResultsSort: function() {
        this.$(".ebates-serp-results-sort").removeClass("ebates-serp-results-sort-unchecked");
        0 === $(".srg .g [data-index]").length && $(".g").each(function(a) {
            $(".rc", this).attr("data-index", 100 - a)
        });
        var a = this.$(".ebates-serp-results-sort-checkbox").is(":checked") ? "data-cashback": "data-index";
        $(".srg").find(".g").sort(function(e, g) {
            var b = $(e).find("[" + a + "]"), m = $(g).find("[" + a + "]"), n = b.attr(a), f = m.attr(a),
            b = parseInt(b.length ? n.replace(/[a-z ]/gi, "") : 0), m = parseInt(m.length ? f.replace(/[a-z ]/gi, "") : 0);
            return b < m ? 1 : b > m?-1 : 0
        }).detach().prependTo($(".srg:first"))
    },
    getSearchTerm: function() {
        return $.trim(decodeURIComponent((new RegExp(this.model.rx)).exec(document.location.href).pop().replace(/\+/g, " ")))
    },
    initialize: function() {
        var a = this;
        this.observer = new MutationObserver(function(e) {
            e.forEach(function(e) {
                a.process()
            })
        });
        this.observer.observe(document.body, {
            attributes: !1,
            childList: !0,
            subtree: !0,
            characterData: !1
        });
        $(window).bind("serp-url-change", function() {
            a.process()
        })
    },
    process: function() {
        if ($("#main").length && $("#appbar").length && $("div.hdtb-mitem.hdtb-msel.hdtb-imb").length && $("#hdtb-msb > :first-child").is(".hdtb-msel")) {
            var a = this.getSearchTerm().toLowerCase();
            "designer shoes" === a || "adidas shoes" == a ? $("#main").hasClass("ebates-serp-results") && this.terms == a || (this.terms = a, this.render()) : (this.$el.remove(), $("#main").removeClass("ebates-serp-results"))
        }
        return !1
    },
    filterResults: function(a, e) {
        var g=!!$(".ebates-serp").length;
        $(".g, .rgsep, .mnr-c").each(function() {
            var b = $(this).is(":has(.ebates-serp)");
            $(this).toggleClass("ebates-serp-hidden", a && g&&!b).toggleClass("ebates-serp-visible", !(a && g&&!b))
        });
        a && this.loadNextPage(e)
    },
    loadNextPage: function(a) {
        var e = this, g = window;
        e.pageLoaded < e.MAX_PAGE_LOAD ? (e.pageLoaded++, a = a || $("#pnnext", g.document).attr("href"), $("<iframe />").attr({
            src: a
        }).css({
            width: "1px",
            height: "1px",
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        }).load(function(a) {
            var m = a.target.contentWindow, n = $(".g",
            m.document).clone();
            $("#ires .srg .g:last", g.document).after(n);
            e.filterResults(!0, $("#pnnext", m.document).attr("href"));
            $(a.target).remove()
        }).appendTo("body")) : (this.$(".ebates-serp-results-sort-checkbox").removeAttr("disabled"), this.$(".ebates-serp-results-sort-checkbox").parent().find("label").css("color", "inherit"))
    },
    render: function() {
        this.pageLoaded = 0;
        this.$el.remove();
        this.setElement($(Handlebars.templates["serp-google-results"]()));
        $("#appbar").after(this.$el);
        $("#main").addClass("ebates-serp-results")
    }
});
EBATES.SERP.init = function() {
    framework.extension.fireEvent("getSettings", {
        data: null
    }, function(a) {
        a.serpEnabled && _.each(a.serp, function(a) {
            if ((new RegExp(a.rx)).test(document.location.href))
                return $(window).unbind("hashchange", EBATES.SERP.init), $(window).unbind("serp-url-change", EBATES.SERP.init), new EBATES.SERP.PageView({
                    model: a
                }), !1
        })
    })
};
window.top == window.self && (EBATES.SERP.interval = window.setInterval(function() {
    EBATES.SERP.location !== location.href && (EBATES.SERP.location = location.href, $(window).trigger("serp-url-change", location.href))
}, 1E3), $(EBATES.SERP.init), $(window).bind("hashchange", EBATES.SERP.init), $(window).bind("serp-url-change", EBATES.SERP.init));


