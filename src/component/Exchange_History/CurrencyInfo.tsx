import { Box, Button, TextField, Typography} from '@mui/material'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from '../../redux/store';
import { addNote, updateNote } from '../../redux/noteSlice';
import { useEffect } from 'react';

interface IFormData {
    title: string;
    body: string;
}


export const CurrencyInfo = () =>{
    const {currency} = useParams<{currency:string}>();
    const dispatch = useDispatch();
    const note = useSelector((state: RootState) => state.notes.notes.find(note => note.currency === currency));

    const { register, handleSubmit, formState: { errors }, setValue} = useForm<IFormData>({
        defaultValues: {
            title:'',
            body: '',
          }
    });

    useEffect(() => { 
        if(note){
            setValue('title', note.title);
            setValue('body', note.body);
        }
    }, [note, setValue]);
    
    const onSubmit = (data:IFormData)=>{
        if (note) {
            dispatch(
              updateNote({
                ...note,
                title: data.title,
                body: data.body,
              })
            );
          } else {
            dispatch(
              addNote({
                currency: currency || '',
                title: data.title,
                body: data.body,
              })
            );
          }
    };


    return (
    <Box sx={{padding: '20px', margin: 'auto', maxWidth: '600px'}}>
      <Typography variant="h3" component="h2" gutterBottom>Currency Info</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField 
            sx={{ m: 1 }}
            label="Title"
            variant="standard"
            {...register("title", { required: true })}
            error={!!errors.title}
            helperText={errors.title ? 'This field is required' : ''}
            />
            <TextField 
            sx={{ m: 1 }}
            label="Note"
            variant="standard"
            {...register("body", { required: true })}
            error={!!errors.body}
            helperText={errors.body ? 'This field is required' : ''}
             />
            <Button type='submit'size="medium" variant="contained">Submit</Button>
        </form>
    </Box>
    )
}