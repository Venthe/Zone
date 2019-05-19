using System;
using System.Collections.Generic;
using System.Text;
using Engine.Core.Sharedkernel.Repositories;

namespace Engine.Core.Scripting
{
    public interface IScriptRepository : IRepository<Script, string>
    {
    }
}
