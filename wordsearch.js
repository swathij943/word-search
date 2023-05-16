// Paired programming with Stephen_Han

const transpose = matrix => {
    if (matrix.length === 0) return []; // Handle empty matrix
    return matrix[0].map((element, colIndex) => matrix.map(row => row[colIndex]));
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const line of horizontalJoin) {
        if (line.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const line of verticalJoin) {
        if (line.includes(word)) return true;
    }
    return false;
};

module.exports = wordSearch