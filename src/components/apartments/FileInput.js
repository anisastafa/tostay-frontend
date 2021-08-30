import {Controller} from "react-hook-form";
import React from "react";
import Dropzone from "react-dropzone";
import Paper from "@material-ui/core/Paper";
import {CloudUpload, InsertDriveFile} from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {List} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#eee",
        textAlign: "center",
        cursor: "pointer",
        color: "#333",
        padding: "10px",
        marginTop: "20px",
    },
    icon: {
        marginTop: "16px",
        color: "#888",
        fontSize: "42px",
    },
}));

export const FileInput = ({control, name}) => {
    const styles = useStyles();
    return (
        <Controller name={name}
                    control={control}
                    defaultValue={[]}
                    render={(onChange, onBlur, value) => (
                        <React.Fragment>
                            <Dropzone onDrop={onChange}>
                                {({getRootProps, getInputProps}) => (
                                    <Paper className={styles.root} variant="outlined" {...getRootProps()}>
                                        <CloudUpload className={styles.icon}/>
                                        <input {...getInputProps()} name={name} onBlur={onBlur}/>
                                        <p>Drag and Drop images here, or click to select images</p>
                                    </Paper>
                                )}
                            </Dropzone>
                            {/*<List>*/}
                            {/*    {value.map((f, index) => {*/}
                            {/*        <ListItem key={index}>*/}
                            {/*            <ListItemIcon>*/}
                            {/*                <InsertDriveFile/>*/}
                            {/*            </ListItemIcon>*/}
                            {/*            <ListItemText primary={f.name} secondary={f.size}/>*/}
                            {/*        </ListItem>*/}
                            {/*    })}*/}
                            {/*</List>*/}
                        </React.Fragment>
                    )}
        />
    )
};