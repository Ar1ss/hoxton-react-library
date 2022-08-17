import { Button } from "./Buttons";

export function ButtonMenu({setTired } : any) {
    return (
        <menu>
            <Button onClick={() => setTired(true)} size='small'>
                Im tired
            </Button>

            <Button onClick={() => setTired(false)} size='large'>
                I'm not tired
            </Button>

        </menu>
    )
}