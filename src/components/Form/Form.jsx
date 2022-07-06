import { Container } from '../../global.styled'
import { FormSection } from './Form.styled'
import { ListState } from '../../helpers/Context'

import Shortened from './Shortened'
import Loading from './Loading'
import InnerForm from './InnerForm'
import Shorten from './bg-shorten-desktop.svg'

const Form = () => {

    const { loading, list } = ListState()

    return <FormSection>
            <Container>
                {loading ? <Loading background={Shorten} /> : <InnerForm background={Shorten}/>}

                {list.length > 0 && list.map( item => <Shortened key={item.id} item={item} /> )}
            </Container>
    </FormSection>
}

export default Form