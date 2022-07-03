import { successResponse, errorResponse } from "../helpers";
import AccountRegister from "../services/AccountRegister";

export const register = async (req: any, res: any) => {
  try {
    const service = new AccountRegister(req.body);
    const returnJson = await service.call();
    return successResponse(req, res, returnJson, 200);
  } catch (error : any) {
    return errorResponse(req, res, error.message);
  }
};