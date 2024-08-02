exports.handler = async (event) => {
    if (event.httpMethod === 'POST') {
        try {
            const data = JSON.parse(event.body).data;
            const numbers = data.filter(x => !isNaN(x));
            const alphabets = data.filter(x => isNaN(x));
            const highestAlphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

            const response = {
                is_success: true,
                user_id: "jalaj_gupta_02081998",
                email: "jalaj@xyz.com",
                roll_number: "ABCD123",
                numbers: numbers,
                alphabets: alphabets,
                highest_alphabet: highestAlphabet
            };
            return {
                statusCode: 200,
                body: JSON.stringify(response)
            };
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ is_success: false, message: error.message })
            };
        }
    } else if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify({ operation_code: 1 })
        };
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' })
        };
    }
};
