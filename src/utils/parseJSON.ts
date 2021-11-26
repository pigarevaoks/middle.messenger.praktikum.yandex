export const parseJSON = (data: unknown) => {
    try {
        return JSON.parse(data as string);
    } catch (error) {
        console.log("parseJSON", error);
        throw new Error("parseJSON ERROR");
    }
};
