exports.dataResponse = function (values, res) {
    const data = {
        status: 'sucess',
        values: values,
    };
    res.json(data),
    res.end()
};