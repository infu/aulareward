export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'run' : IDL.Func([IDL.Nat], [IDL.Int64], []) });
};
export const init = ({ IDL }) => { return []; };
