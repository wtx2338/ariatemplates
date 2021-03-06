/*
 * Copyright 2012 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Aria.classDefinition({
    $classpath : "test.aria.touch.widgets.popup.PopupTestCase",
    $extends : "aria.jsunit.TemplateTestCase",
    $dependencies : ["aria.utils.Json", "aria.core.Browser"],
    $constructor : function () {
        this.$TemplateTestCase.constructor.call(this);

        this.data = {
            popupVisible : true
        };

        var browserVersion = parseInt(aria.core.Browser.version, 10);
        this.cssAnimationsNotSupported = (aria.core.Browser.isIE && browserVersion < 10)
                || (aria.core.Browser.isFirefox && browserVersion < 4);

        if (!this.cssAnimationsNotSupported) {
            this.setTestEnv({
                template : "test.aria.touch.widgets.popup.PopupTestCaseTpl",
                data : this.data
            });
        }
    },
    $prototype : {
        runTemplateTest : function () {
            if (this.cssAnimationsNotSupported) {
                this.end();
            } else {
                this.synEvent.click(Aria.$window.document.body, {
                    fn : this.delayedCheckBindings,
                    scope : this
                });
            }
        },

        checkBindings : function () {
            this.assertFalse(this.templateCtxt.data.popupVisible, "The 'visible' bound data should be false");

            this.notifyTemplateTestEnd();
        },

        delayedCheckBindings : function () {
            aria.core.Timer.addCallback({
                fn : this.checkBindings,
                scope : this,
                delay : 1000
            });
        }

    }
});
