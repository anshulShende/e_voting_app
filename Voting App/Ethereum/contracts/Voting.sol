pragma solidity ^0.4.17;

contract Election {
    
    struct Candidate{
        string name;
        string partyName;
        uint voteCount;
    }
    
    struct Voter{
        bool voted;
        uint vote;
    }

    struct Transaction{
        address sA;
        string tH;
        string bH;
        string bN;
        string tS;
    }
    
    address public owner;
    string public electionName;
    
    mapping( address => Voter) public voters;
    Candidate[] public candidates;
    Transaction[] public transactions;
    uint public totalVotes;
    
    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }
    
    function Election() public {
        owner = msg.sender;
    }
    
    function addCandidate(string _name, string _partyName) public ownerOnly  {
        Candidate memory newCandidate = Candidate({
            name : _name,
            partyName : _partyName,
            voteCount : 0
        })  ;

        candidates.push(newCandidate);
    }

    function addTransactions(address _sA, string _tH, string _bH, string _bN, string _tS) public {
        Transaction memory newTransaction = Transaction({
            sA : _sA,
            tH : _tH,
            bH : _bH,
            bN : _bN,
            tS : _tS
        });
        transactions.push(newTransaction);
    }
    
    function getNumCandidate() public view returns(uint) {
        return candidates.length;
    }

    function getNumberofTransactions() public view returns(uint){
        return transactions.length;
    }
    
    function vote(uint _voteIndex) public {
        require(!voters[msg.sender].voted);
        voters[msg.sender].vote = _voteIndex;
        voters[msg.sender].voted = true;
        candidates[_voteIndex].voteCount += 1;
        totalVotes += 1;

    }

    function end() public ownerOnly  {
        selfdestruct(owner);
    }
}