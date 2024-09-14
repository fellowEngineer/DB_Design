import Stream from "../models/stream.model.js"

const getObjectIdFromStream = async (streamName) => {
    try {
        
        const stream = await Stream.findOne({stream_name: streamName})

        if(!stream)
        {
            throw new Error("GOIF_STREAM:CONTROLLER:ERR.");
        }

        return stream._id;

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default getObjectIdFromStream;