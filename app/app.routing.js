"use strict";
var router_1 = require('@angular/router');
var question_list_component_1 = require('./question-list/question-list.component');
var question_component_1 = require('./question/question.component');
var appRoutes = [
    {
        path: 'questions',
        component: question_list_component_1.QuestionListComponent
    },
    {
        path: 'create-a-question',
        component: question_component_1.QuestionComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map