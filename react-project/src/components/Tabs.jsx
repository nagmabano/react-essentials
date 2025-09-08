export default function Tabs({children, buttons, ButtonsContainer}) {
    // const ButtonsContainer = buttonsContainer
    return <>
        <ButtonsContainer>
        {buttons} {/** slot 1 */}
        </ButtonsContainer>
        {children} {/** slot 2 */}
    </>
}