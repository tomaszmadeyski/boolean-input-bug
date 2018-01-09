import React from 'react';
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, BooleanInput, EditButton } from 'admin-on-rest';

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="body" />
            <BooleanInput source="bool" label="Bool field"/>
        </SimpleForm>
    </Edit>
);