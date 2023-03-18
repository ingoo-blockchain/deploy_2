import { Accordion } from "../../common/accordion"

export const Header = () => {
    return (
        <>
            <Accordion title={"제목"}>
                <ul>
                    <li>메뉴1</li>
                    <li>메뉴2</li>
                    <li>메뉴3</li>
                </ul>
            </Accordion>
        </>
    )
}
