const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 =  new Web3(provider);

const compiledVoting = require('../Ethereum/build/Election.json')

let voting;    
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    voting = await new web3.eth.Contract(JSON.parse(compiledVoting.interface))
    .deploy({data : compiledVoting.bytecode })
    .send({ from : accounts[0], gas : '1000000' });
}
);

describe('Voting Contract', () => {
    it('deploys a contract', () => {
        assert.ok(voting.options.address);
    });


    it('To check that Candidate is not added by someone other than manager', async () =>{
        try{
            await voting.methods.addCandidate('Narendra Modi', 'BJP')
            .send({
                from : accounts[1],
                gas : '1000000'
            })
            assert(err)
        } catch(err){
            assert(err) 
        }   
    })

   
    it("Are Candidate being Created", async() =>{
        await voting.methods.addCandidate('Narendra Modi','BJP')
        .send({
            from : accounts[0],
            gas : '1000000'
        })
        const candidates = await voting.methods.candidates(0).call();

        assert.equal('Narendra Modi',candidates.name)
    })

    it("To check if the Voter can Vote", async() =>{

        await voting.methods.addCandidate('Narendra Modi','BJP')
        .send({
            from : accounts[0],
            gas : '1000000'
        })
        
        await voting.methods.vote(0).send({
            from : accounts[1],
            gas : '1000000'
        })

        const hasVoted = await voting.methods.voters(accounts[1]).call()
        const candidates = await voting.methods.candidates(0).call()
        const totalVotes = await voting.methods.totalVotes().call()
        
        assert.equal(candidates.voteCount, 1)
        assert(hasVoted.voted)
        assert.equal(totalVotes,1)
    });

    it('To Check if the voter cannot vote twice', async () =>{
        
        await voting.methods.addCandidate('Narendra Modi','BJP')
        .send({
            from : accounts[0],
            gas : '1000000'
        })

        await voting.methods.addCandidate('Rahul Gandhi', 'Congress')
        .send({
            from : accounts[0],
            gas : '1000000'
        })

        try{
            await voting.methods.vote(0).send({
                from : accounts[1],
                gas : '1000000'
            })

            await voting.methods.vote(0).send({
                from : accounts[1],
                gas : '1000000'
            })
            assert(err)

        }catch(err){
            assert(err)
        }
        
    })
    
    //End to End Test
    it('Entire Voting Process', async () =>{

        await voting.methods.addCandidate('Narendra Modi','BJP')
        .send({
            from : accounts[0],
            gas : '1000000'
        })
        await voting.methods.addCandidate('Rahul Gandhi','Congress')
        .send({
            from : accounts[0],
            gas : '1000000'
        })
        
        await voting.methods.vote(0).send({
            from : accounts[1],
            gas : '1000000'
        })

        await voting.methods.vote(0).send({
            from : accounts[2],
            gas : '1000000'
        })

        await voting.methods.vote(1).send({
            from : accounts[3],
            gas : '1000000'
        })

        const voter1 = await voting.methods.voters(accounts[1]).call()
        const voter2 = await voting.methods.voters(accounts[2]).call()
        const voter3 = await voting.methods.voters(accounts[3]).call()
        const candidate1 = await voting.methods.candidates(0).call()
        const candidate2 = await voting.methods.candidates(1).call()
        const totalVotes = await voting.methods.totalVotes().call()
        const numCandidates = await voting.methods.getNumCandidate().call()
        
        assert.equal(candidate1.voteCount, 2)
        assert.equal(candidate2.voteCount,1)
        assert.equal(voter1.vote,0)
        assert.equal(voter2.vote,0)
        assert.equal(voter3.vote,1)

        assert.equal(totalVotes,3)
        assert.equal(numCandidates,2)
    })

    it('To test if the winner is picked or not', async () =>{
        await voting.methods.addCandidate('Narendra Modi','BJP')
        .send({
            from : accounts[0],
            gas : '1000000'
        })

        await voting.methods.addCandidate('Rahul Gandhi','Congress')
        .send({
            from : accounts[0],
            gas : '1000000'
        })

        await voting.methods.vote(0).send({
            from : accounts[1],
            gas : '1000000'
        })

        await voting.methods.vote(0).send({
            from : accounts[2],
            gas : '1000000'
        })

        await voting.methods.vote(0).send({
            from : accounts[3],
            gas : '1000000'
        })

        const candidate = await voting.methods.candidates(0).call()
        const winner = await voting.methods.Winner().call()
        
        assert.equal(3, winner[2])
    })
        
});