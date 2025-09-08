export default function Tabs({children, buttons}) {
    return <>
        <menu>
        {buttons} {/** slot 1 */}
        </menu>
        {children} {/** slot 2 */}
    </>
}