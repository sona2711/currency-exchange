import Button from '@mui/material/Button';


export function SubmitBtn() {
  const btnText = 'Convert';
  return (
      <Button type='submit' size="medium" variant="contained">
        {btnText}
      </Button>
  );
}
