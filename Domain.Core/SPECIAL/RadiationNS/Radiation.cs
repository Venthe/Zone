﻿using System;
using System.Collections.Generic;
using System.Text;
using Engine.Core.Scripting;

namespace Engine.Core.SPECIAL.RadiationNS
{
    public class Radiation
    {
        private ScriptRepository scriptRepository = new ScriptRepository();
        private int value = 0;

        public int Value
        {
            get => value;
            set {
                scriptRepository.GetById("handleRadiationLevel").Execute(value);
                this.value = value;
            }
        }
    }
}
