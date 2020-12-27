const resource = {
    groups: [{
        legend: 'Add Resource',
        fields: [{
                type: 'input',
                inputType: 'text',
                label: 'Title',
                model: 'title',
                styleClasses: 'col-md-6'
            },
            {
                type: 'select',
                label: 'Category',
                model: 'category_id',
                values: [
                    { id: 'male', name: 'Male' },
                    { id: 'female', name: 'Female' }
                ],
                selectOptions: {
                    noneSelectedText: 'Choose One'
                },
                required: true,
                styleClasses: 'col-md-6'
            },
            {
                type: 'input',
                inputType: 'text',
                label: 'Description',
                model: 'description',
                styleClasses: 'col-md-6'
            },
            {
                type: 'input',
                inputType: 'text',
                label: 'Tags',
                model: 'tags',
                styleClasses: 'col-md-6'
            }
        ]
    }]
}

export { resource }
