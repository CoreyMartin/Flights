export const webOnly = {
    bgImg: {
        background: 'url(img/cloud.png) 50% 50% / contain no-repeat'
    }
}

export default {
    container: {
        display: 'flex',
        flex: 0,
        flexDirection: 'column',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(97, 177, 212, 1)',
        height: '100%',
        padding: 20
    },
    inner: {
        padding: 0,
        paddingLeft: 40,
        paddingRight: 40,
        width: '100%',
        height: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'Roboto-Bold',
        margin: 0,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'black'
    },
    text: {
        textAlign: 'center',
        fontFamily: 'OpenSans',
        color: '#333333',
        margin: 0,
        marginBottom: 20,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    image: {
        height: null,
        width: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 8,
        paddingBottom: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        width: '80%',
        maxWidth: 300,
        marginTop: 40
    },
    buttonText: {
        color: 'black'
    }
}