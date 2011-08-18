#include <iostream>
#include <vector>
using namespace std;

#include "Pythia.h"
using namespace Pythia8;

#include "GenparticleTree.h"

int main()
{
   Pythia pythia;

   pythia.readString("Top:all = on");

   pythia.readString("Random:setSeed = on");
   pythia.readString("Random:seed = 0");

   pythia.init(2212, 2212, 7000);

   pythia.next();

   vector<GenParticle> particles(pythia.event.size());
   for(int j = 0; j < pythia.event.size(); j++)
   {
      particles[j].P[0] = pythia.event[j].e();
      particles[j].P[1] = pythia.event[j].px();
      particles[j].P[2] = pythia.event[j].py();
      particles[j].P[3] = pythia.event[j].pz();

      particles[j].V[0] = pythia.event[j].tProd();
      particles[j].V[1] = pythia.event[j].xProd();
      particles[j].V[2] = pythia.event[j].yProd();
      particles[j].V[3] = pythia.event[j].zProd();

      particles[j].PDGID = pythia.event[j].id();
      particles[j].StatusCode = pythia.event.statusHepMC(j);

      particles[j].Mothers = pythia.event.motherList(j);
      particles[j].Daughters = pythia.event.daughterList(j);
   }

   GenParticleTree Event(particles, 0, 0);

   cout << "function InitializeParticles()" << endl;
   cout << "{" << endl;
   cout << "   ParticleList.length = 0;" << endl;
   cout << endl;
   cout << "   var NewParticle = new Object();" << endl;
   cout << "   NewParticle.P = new Array(4);" << endl;
   cout << "   NewParticle.V0 = new Array(4);" << endl;
   cout << endl;
   for(int i = 0; i < Event.ParticleCount(); i++)
   {
      bool WriteOut = false;
      if(Event[i].StatusCode == 1)
         WriteOut = true;
      if(Event[i].Daughters.size() == 0)
         WriteOut = true;
      if(Event[i].Daughters.size() > 0 && Event[Event[i].Daughters[0]].V[0] > Event[i].V[0])
         WriteOut = true;

      if(WriteOut == false)
         continue;

      cout << "   NewParticle.P[0] = " << Event[i].P[0] << endl;
      cout << "   NewParticle.P[1] = " << Event[i].P[1] << endl;
      cout << "   NewParticle.P[2] = " << Event[i].P[2] << endl;
      cout << "   NewParticle.P[3] = " << Event[i].P[3] << endl;
      cout << "   NewParticle.V0[0] = " << Event[i].V[0] << endl;
      cout << "   NewParticle.V0[1] = " << Event[i].V[1] << endl;
      cout << "   NewParticle.V0[2] = " << Event[i].V[2] << endl;
      cout << "   NewParticle.V0[3] = " << Event[i].V[3] << endl;
      cout << "   NewParticle.PDGID = " << Event[i].PDGID << endl;
      
      if(Event[i].Daughters.size() == 0)
         cout << "   NewParticle.Time = 999999" << endl;
      else
         cout << "   NewParticle.Time = " << Event[Event[i].Daughters[0]].V[0] << endl;

      cout << "   ParticleList[ParticleList.length] = NewParticle.clone()" << endl;
      cout << endl;
   }
   cout << "}" << endl;
   cout << endl;

   return 0;
}
