import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {
    const greetParent = (props) => {
        alert(`Hello ${props}!`)
    }

    return <ChildComponent greetHandler={greetParent}></ChildComponent>
}