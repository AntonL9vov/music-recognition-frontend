import {Link} from "../../shared/ui";
import {Button} from '@mui/material'

export function HomePage() {

    return (
        <div>
            <Link to={'/music-recognition'}>
                <Button>
                    Music Recognition
                </Button>
            </Link>
        </div>
    )
}