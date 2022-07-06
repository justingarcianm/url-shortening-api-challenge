import { FormWrapper, InnerFormWrapper } from "./Form.styled"

const InnerForm = ({background}) => {
    return <FormWrapper background={background}>
        <InnerFormWrapper>
            <input type="text" required placeholder="Shorten a link here..."/>
            <button type="submit">Shorten it!</button>
        </InnerFormWrapper>
    </FormWrapper>
}

export default InnerForm