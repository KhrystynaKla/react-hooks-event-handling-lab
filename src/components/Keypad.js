// Code Keypad Component Here

function Keypad (){

    function handlePassword(){
        console.log('Entering password...')
    }

    return (
        <div>
            <input type='password' onChange = {handlePassword}/>
        </div>
    )
}

export default Keypad;