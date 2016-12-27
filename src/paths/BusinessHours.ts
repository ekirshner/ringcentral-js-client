// This is Generated Source.
import BusinessHourScheduleInfo from "../definitions/BusinessHourScheduleInfo";
import PathSegment from "../PathSegment";

export default class BusinessHours extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("business-hours", id, prv, service);
    }

    /**
     *  Get User Hours Setting
     */
    get(): Promise<GetResponse> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then((res) => {
            return res.json();
        });
    }
}

export interface GetResponse {

    /**
     * Canonical URI of a business-hours resource
     */
    uri?: string;

    /**
     * Schedule when an answering rule is applied
     */
    schedule?: BusinessHourScheduleInfo;
}