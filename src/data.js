export const statesNames = [
    { label: 'Alabama', value: 'alabama' },
    { label: 'Alaska', value: 'alaska' },
    { label: 'Arizona', value: 'arizona' },
    { label: 'California', value: 'california' },
    { label: 'Colorado', value: 'colorado' },
    { label: 'Connecticut', value: 'connecticut' },
    { label: 'Delaware', value: 'delaware' },
    { label: 'Florida', value: 'florida' },
    { label: 'Georgia', value: 'georgia' },
    { label: 'Hawaii', value: 'hawaii' },
    { label: 'Idaho', value: 'idaho' },
    { label: 'Illinois', value: 'illinois' },
    { label: 'Indiana', value: 'indiana' },
    { label: 'Iowa', value: 'iowa' },
    { label: 'Kansas', value: 'kansas' },
    { label: 'Kentucky', value: 'kentucky' },
    { label: 'Louisiana', value: 'louisiana' },
    { label: 'Maine', value: 'maine' },
    { label: 'Maryland', value: 'maryland' },
    { label: 'Massachusetts', value: 'massachusetts' },
    { label: 'Michigan', value: 'michigan' },
    { label: 'Minnesota', value: 'minnesota' },
    { label: 'Mississippi', value: 'mississippi' },
    { label: 'Missouri', value: 'missouri' },
    { label: 'Montana', value: 'montana' },
    { label: 'Nebraska', value: 'nebraska' },
    { label: 'Nevada', value: 'nevada' },
    { label: 'New-hampshire', value: 'new-hampshire' },
    { label: 'New-jersey', value: 'new-jersey' },
    { label: 'New-mexico', value: 'new-mexico' },
    { label: 'New-york', value: 'new-york' },
    { label: 'North-carolina', value: 'north-carolina' },
    { label: 'North-dakota', value: 'north-dakota' },
    { label: 'Ohio', value: 'ohio' },
    { label: 'Oklahoma', value: 'oklahoma' },
    { label: 'Oregon', value: 'oregon' },
    { label: 'Pennsylvania', value: 'pennsylvania' },
    { label: 'Rhode-island', value: 'rhode-island' },
    { label: 'South-carolina', value: 'south-carolina' },
    { label: 'South-dakota', value: 'south-dakota' },
    { label: 'Tennessee', value: 'tennessee' },
    { label: 'Texas', value: 'texas' },
    { label: 'Utah', value: 'utah' },
    { label: 'Vermont', value: 'vermont' },
    { label: 'Virginia', value: 'virginia' },
    { label: 'Washington', value: 'washington' },
    { label: 'West-virginia', value: 'west-virginia' },
    { label: 'Wisconsin', value: 'wisconsin' },
    { label: 'Wyoming', value: 'wyoming' },
]

export const activityName = [{ label: 'Stargazing', value: 'Stargazing' }]

export const filterList = (activities) => [
    {
        label: 'State',
        options: [
            ...statesNames.map((state) => {
                return { name: state.value.toUpperCase() }
            }),
        ],
    },
    {
        label: 'Activity',
        options: [
            ...activityName.map((activity) => {
                return { name: activity.value }
            }),
        ],
    },
]
