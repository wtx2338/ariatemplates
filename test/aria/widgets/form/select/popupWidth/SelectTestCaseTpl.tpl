/*
 * Copyright 2013 Amadeus s.a.s.
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

{Template {
    $classpath:"test.aria.widgets.form.select.popupWidth.SelectTestCaseTpl"
}}
    {macro main()}
        <span {id "clickHelper"/}>Click helper</span><br />
        {@aria:Select {
            id: "mySelect1",
            label: "First",
            labelWidth:50,
            options: [{label: "A very very long option 1",value:"opt1"},{label: "An even longer option 2 with many characters",value:"opt2"}],
            width:150,
            popupWidth: 120
        }/}<br />
        {@aria:Select {
            id: "mySelect2",
            label: "Second",
            labelWidth:50,
            options: [{label: "A very very long option 1",value:"opt1"},{label: "An even longer option 2 with many characters",value:"opt2"}],
            width:150,
            popupWidth: 300
        }/}
    {/macro}
{/Template}