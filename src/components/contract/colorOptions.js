const colorOptions = (intl) => [
    { value: '#F44336', label: intl.formatMessage({ id: 'contract.color.option.red' }) },
    { value: '#F06292', label: intl.formatMessage({ id: 'contract.color.option.pink' }) },
    { value: '#FF9800', label: intl.formatMessage({ id: 'contract.color.option.orange' }) },
    { value: '#FFEB3B', label: intl.formatMessage({ id: 'contract.color.option.yellow' }) },
    { value: '#4CAF50', label: intl.formatMessage({ id: 'contract.color.option.green' }) },
    { value: '#03A9F4', label: intl.formatMessage({ id: 'contract.color.option.blue' }) },
    { value: '#673AB7', label: intl.formatMessage({ id: 'contract.color.option.purple' }) },
    { value: '#9E9E9E', label: intl.formatMessage({ id: 'contract.color.option.gray' }) },
    { value: '#212121', label: intl.formatMessage({ id: 'contract.color.option.black' }) },
    { value: '#eeeeee', label: intl.formatMessage({ id: 'contract.color.option.white' }) },
];

export default colorOptions;
