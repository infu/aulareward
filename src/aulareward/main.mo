import Random "mo:base/Random";
import Nat "mo:base/Nat";
import Float "mo:base/Float";

actor {
  public func run(max: Nat) : async Int64 {
    let entropy = await Random.blob(); 
    let random = Random.rangeFrom(32, entropy);
    let maxx : Float = 4294967295;
    let newRandom = Float.fromInt(random) / maxx;
    Float.toInt64(Float.ceil(newRandom * Float.fromInt(max)));
  };

}
