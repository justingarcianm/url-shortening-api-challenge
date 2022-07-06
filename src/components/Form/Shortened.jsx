
import { ShortenedWrapper } from "./Form.styled"
import { ListState } from "../../helpers/Context"

const Shortened = ({item}) => {

    const { removeLink } = ListState()

    return <ShortenedWrapper>
        <p>{item.original}</p>
        <div className="shortened-link-group">
            <p>{item.short}</p>
            <button>Copy Link</button>
        </div>
    </ShortenedWrapper>
}

export default Shortened