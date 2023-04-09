const urlFetch = 'https://api.github.com/users/'

const gettingUser = async userHub => {
    let payload;
    try {
        const response = await fetch(`${urlFetch}${userHub}`, {
            method: 'GET',
        });
        payload = response.json();
    } catch (error) {
        throw Error(error);
    }
    return payload;
}

export default gettingUser;