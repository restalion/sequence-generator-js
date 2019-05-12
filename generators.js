function generateNumericSeq(initialValue, numValues, maxLength) {
    var list = [];

    for (i = initialValue; i < initialValue + numValues; i++) {
        if (i.toString().length <= maxLength) {
            list.push(i);
        } 
    }

    return list;
}