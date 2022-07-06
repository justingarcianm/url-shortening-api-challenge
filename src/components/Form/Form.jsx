import { useState } from 'react'
import { Container } from '../../global.styled'
import { FormSection } from './Form.styled'

import Loading from './Loading'
import InnerForm from './InnerForm'
import Shorten from './bg-shorten-desktop.svg'

const Form = () => {

    const [ loading, setLoading ] = useState(false)

    return <FormSection>
        <Container>
            {loading ? <Loading background={Shorten} /> : <InnerForm background={Shorten}/>}
        </Container>
    </FormSection>
}

export default Form