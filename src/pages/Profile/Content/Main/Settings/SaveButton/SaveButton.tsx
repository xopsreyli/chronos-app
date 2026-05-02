import SaveIcon from '@mui/icons-material/Save'
import { Button } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import type { SettingsFormData } from '../../../../../../types/settings/types.ts'

const SaveButton = () => {
    const {
        formState: { isDirty },
    } = useFormContext<SettingsFormData>()

    return (
        <Button
            type="submit"
            variant="contained"
            startIcon={<SaveIcon />}
            size="large"
            disabled={!isDirty}
            sx={{
                textTransform: 'capitalize',
                px: 4,
            }}
        >
            save settings
        </Button>
    )
}

export default SaveButton
