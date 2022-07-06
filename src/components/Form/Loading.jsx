import { FormWrapper, LoadingWrapper } from "./Form.styled"

const Loading = ({background}) => {
    return <FormWrapper background={background}>
        <h3>Fetching Link..</h3>
    </FormWrapper>
}

export default Loading