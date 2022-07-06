import { FormWrapper, InnerFormWrapper } from "./Form.styled"
import { ListState } from "../../helpers/Context"

const InnerForm = ({background}) => {

    const { addLink, errorMessage } = ListState()

    return <FormWrapper background={background}>
        <InnerFormWrapper onSubmit={(e) => addLink(e, document.getElementById('link').value.trim())}>
            <input type="url" id="link" required placeholder="Shorten a link here..."/>
            <button type="submit">Shorten it!</button>
        </InnerFormWrapper>
        {errorMessage !== '' && errorMessage}
    </FormWrapper>
}

export default InnerForm