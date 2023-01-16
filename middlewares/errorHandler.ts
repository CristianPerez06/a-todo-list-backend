// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const ErrorHandler = (err: any, req: any, res: any, next: any) => {
  const errResp = {
    status: err.statusCode || 500,
    error: process.env.NODE_ENV === 'development' ? err.message : 'server error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  }

  res.status(errResp.status).json(errResp)
}

export default ErrorHandler
