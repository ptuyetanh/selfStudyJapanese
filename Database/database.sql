PGDMP                      |            selfStudyJapanese    16.2    16.2 B               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16438    selfStudyJapanese    DATABASE     �   CREATE DATABASE "selfStudyJapanese" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Vietnamese_Vietnam.1252';
 #   DROP DATABASE "selfStudyJapanese";
                postgres    false                       0    0    DATABASE "selfStudyJapanese"    ACL     �   GRANT ALL ON DATABASE "selfStudyJapanese" TO pg_read_all_settings;
GRANT ALL ON DATABASE "selfStudyJapanese" TO pg_read_all_stats;
                   postgres    false    4882            �            1259    16521    alphabetlessons    TABLE     v   CREATE TABLE public.alphabetlessons (
    lesson_id bigint NOT NULL,
    lesson_name text,
    lesson_example text
);
 #   DROP TABLE public.alphabetlessons;
       public         heap    postgres    false            �            1259    16520    alphabetlessons_lesson_id_seq    SEQUENCE     �   ALTER TABLE public.alphabetlessons ALTER COLUMN lesson_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.alphabetlessons_lesson_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    225            �            1259    16513 	   alphabets    TABLE     �   CREATE TABLE public.alphabets (
    alphabet_id bigint NOT NULL,
    name text,
    pronunciation text,
    example text,
    sound text,
    type text,
    lesson_id bigint
);
    DROP TABLE public.alphabets;
       public         heap    postgres    false            �            1259    24909    alphabets_alphabet_id_seq    SEQUENCE     �   ALTER TABLE public.alphabets ALTER COLUMN alphabet_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.alphabets_alphabet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    223            �            1259    16505    communications    TABLE     >  CREATE TABLE public.communications (
    communication_id bigint NOT NULL,
    lesson_name text,
    sound_shadowing text,
    one_a text,
    one_b text,
    two_a text,
    two_b text,
    three_a text,
    three_b text,
    four_a text,
    four_b text,
    five_a text,
    five_b text,
    mean_shadowing text
);
 "   DROP TABLE public.communications;
       public         heap    postgres    false            �            1259    24911 #   communications_communication_id_seq    SEQUENCE     �   ALTER TABLE public.communications ALTER COLUMN communication_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.communications_communication_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    222            �            1259    16492    grammars    TABLE     �   CREATE TABLE public.grammars (
    grammar_id bigint NOT NULL,
    name text,
    mean text,
    example text,
    mean_example text,
    sound text,
    explain text,
    level_id bigint,
    lesson_name text
);
    DROP TABLE public.grammars;
       public         heap    postgres    false            �            1259    24924    grammars_grammar_id_seq    SEQUENCE     �   ALTER TABLE public.grammars ALTER COLUMN grammar_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.grammars_grammar_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    221            �            1259    16471    levels    TABLE     R   CREATE TABLE public.levels (
    level_id bigint NOT NULL,
    level_name text
);
    DROP TABLE public.levels;
       public         heap    postgres    false            �            1259    16470    levels_level_id_seq    SEQUENCE     �   ALTER TABLE public.levels ALTER COLUMN level_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.levels_level_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    220            �            1259    16581    reviews    TABLE     �   CREATE TABLE public.reviews (
    review_id bigint NOT NULL,
    vocab_id bigint,
    grammar_id bigint,
    name text,
    mean text,
    review_last timestamp without time zone,
    review_next timestamp without time zone,
    user_id bigint
);
    DROP TABLE public.reviews;
       public         heap    postgres    false            �            1259    24926    reviews_review_id_seq    SEQUENCE     �   ALTER TABLE public.reviews ALTER COLUMN review_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.reviews_review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    228            �            1259    16448    roles    TABLE     O   CREATE TABLE public.roles (
    role_id bigint NOT NULL,
    role_name text
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    16455    roles_role_id_seq    SEQUENCE     �   ALTER TABLE public.roles ALTER COLUMN role_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.roles_role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    16540    signupmembers    TABLE     �   CREATE TABLE public.signupmembers (
    signupmember_id bigint NOT NULL,
    timestudy text,
    paymentphoto text,
    timesignup timestamp without time zone,
    user_id bigint
);
 !   DROP TABLE public.signupmembers;
       public         heap    postgres    false            �            1259    16539 !   signupmembers_signupmember_id_seq    SEQUENCE     �   ALTER TABLE public.signupmembers ALTER COLUMN signupmember_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.signupmembers_signupmember_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    227            �            1259    16439    users    TABLE     �   CREATE TABLE public.users (
    user_id bigint NOT NULL,
    fullname text,
    email text,
    phonenumber bigint,
    dateofbirth date,
    password text,
    role_id bigint DEFAULT 1,
    start_day date,
    expiration_date date
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24925    users_user_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            �            1259    16462    vocabularies    TABLE     �   CREATE TABLE public.vocabularies (
    vocab_id bigint NOT NULL,
    name text,
    mean text,
    example text,
    sound text,
    sino_vietnamese_sound text,
    pronunciation text,
    example_mean text,
    lesson_name text,
    level_id bigint
);
     DROP TABLE public.vocabularies;
       public         heap    postgres    false            �            1259    24913    vocabularies_vocab_id_seq    SEQUENCE     �   ALTER TABLE public.vocabularies ALTER COLUMN vocab_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.vocabularies_vocab_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218                      0    16521    alphabetlessons 
   TABLE DATA           Q   COPY public.alphabetlessons (lesson_id, lesson_name, lesson_example) FROM stdin;
    public          postgres    false    225   �P                 0    16513 	   alphabets 
   TABLE DATA           f   COPY public.alphabets (alphabet_id, name, pronunciation, example, sound, type, lesson_id) FROM stdin;
    public          postgres    false    223   FQ                  0    16505    communications 
   TABLE DATA           �   COPY public.communications (communication_id, lesson_name, sound_shadowing, one_a, one_b, two_a, two_b, three_a, three_b, four_a, four_b, five_a, five_b, mean_shadowing) FROM stdin;
    public          postgres    false    222   ]       �          0    16492    grammars 
   TABLE DATA           x   COPY public.grammars (grammar_id, name, mean, example, mean_example, sound, explain, level_id, lesson_name) FROM stdin;
    public          postgres    false    221   -`       �          0    16471    levels 
   TABLE DATA           6   COPY public.levels (level_id, level_name) FROM stdin;
    public          postgres    false    220   Je                 0    16581    reviews 
   TABLE DATA           q   COPY public.reviews (review_id, vocab_id, grammar_id, name, mean, review_last, review_next, user_id) FROM stdin;
    public          postgres    false    228   �e       �          0    16448    roles 
   TABLE DATA           3   COPY public.roles (role_id, role_name) FROM stdin;
    public          postgres    false    216   �f                 0    16540    signupmembers 
   TABLE DATA           f   COPY public.signupmembers (signupmember_id, timestudy, paymentphoto, timesignup, user_id) FROM stdin;
    public          postgres    false    227   �f       �          0    16439    users 
   TABLE DATA           �   COPY public.users (user_id, fullname, email, phonenumber, dateofbirth, password, role_id, start_day, expiration_date) FROM stdin;
    public          postgres    false    215   �g       �          0    16462    vocabularies 
   TABLE DATA           �   COPY public.vocabularies (vocab_id, name, mean, example, sound, sino_vietnamese_sound, pronunciation, example_mean, lesson_name, level_id) FROM stdin;
    public          postgres    false    218   �i                  0    0    alphabetlessons_lesson_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.alphabetlessons_lesson_id_seq', 4, true);
          public          postgres    false    224                       0    0    alphabets_alphabet_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.alphabets_alphabet_id_seq', 129, true);
          public          postgres    false    229                       0    0 #   communications_communication_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.communications_communication_id_seq', 3, true);
          public          postgres    false    230                       0    0    grammars_grammar_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.grammars_grammar_id_seq', 8, true);
          public          postgres    false    232                       0    0    levels_level_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.levels_level_id_seq', 5, true);
          public          postgres    false    219                       0    0    reviews_review_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.reviews_review_id_seq', 18, true);
          public          postgres    false    234                       0    0    roles_role_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.roles_role_id_seq', 3, true);
          public          postgres    false    217                       0    0 !   signupmembers_signupmember_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.signupmembers_signupmember_id_seq', 48, true);
          public          postgres    false    226                       0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 11, true);
          public          postgres    false    233                       0    0    vocabularies_vocab_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.vocabularies_vocab_id_seq', 18, true);
          public          postgres    false    231            [           2606    16527 $   alphabetlessons alphabetlessons_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.alphabetlessons
    ADD CONSTRAINT alphabetlessons_pkey PRIMARY KEY (lesson_id);
 N   ALTER TABLE ONLY public.alphabetlessons DROP CONSTRAINT alphabetlessons_pkey;
       public            postgres    false    225            Y           2606    16517    alphabets alphabets_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.alphabets
    ADD CONSTRAINT alphabets_pkey PRIMARY KEY (alphabet_id);
 B   ALTER TABLE ONLY public.alphabets DROP CONSTRAINT alphabets_pkey;
       public            postgres    false    223            W           2606    16509 "   communications communications_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.communications
    ADD CONSTRAINT communications_pkey PRIMARY KEY (communication_id);
 L   ALTER TABLE ONLY public.communications DROP CONSTRAINT communications_pkey;
       public            postgres    false    222            U           2606    16498    grammars grammars_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.grammars
    ADD CONSTRAINT grammars_pkey PRIMARY KEY (grammar_id);
 @   ALTER TABLE ONLY public.grammars DROP CONSTRAINT grammars_pkey;
       public            postgres    false    221            S           2606    16475    levels levels_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.levels
    ADD CONSTRAINT levels_pkey PRIMARY KEY (level_id);
 <   ALTER TABLE ONLY public.levels DROP CONSTRAINT levels_pkey;
       public            postgres    false    220            a           2606    16587    reviews reviews_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (review_id);
 >   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_pkey;
       public            postgres    false    228            O           2606    16454    roles roles_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role_id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    216            ]           2606    16546     signupmembers signupmembers_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.signupmembers
    ADD CONSTRAINT signupmembers_pkey PRIMARY KEY (signupmember_id);
 J   ALTER TABLE ONLY public.signupmembers DROP CONSTRAINT signupmembers_pkey;
       public            postgres    false    227            _           2606    16617 '   signupmembers signupmembers_user_id_key 
   CONSTRAINT     e   ALTER TABLE ONLY public.signupmembers
    ADD CONSTRAINT signupmembers_user_id_key UNIQUE (user_id);
 Q   ALTER TABLE ONLY public.signupmembers DROP CONSTRAINT signupmembers_user_id_key;
       public            postgres    false    227            I           2606    16446    users user_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT user_pkey;
       public            postgres    false    215            K           2606    24727    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    215            M           2606    24729    users users_phonenumber_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phonenumber_key UNIQUE (phonenumber);
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT users_phonenumber_key;
       public            postgres    false    215            Q           2606    16468    vocabularies vocabularys_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.vocabularies
    ADD CONSTRAINT vocabularys_pkey PRIMARY KEY (vocab_id);
 G   ALTER TABLE ONLY public.vocabularies DROP CONSTRAINT vocabularys_pkey;
       public            postgres    false    218            d           2606    16499    grammars FK_Grammar_level    FK CONSTRAINT     �   ALTER TABLE ONLY public.grammars
    ADD CONSTRAINT "FK_Grammar_level" FOREIGN KEY (level_id) REFERENCES public.levels(level_id) ON UPDATE CASCADE ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.grammars DROP CONSTRAINT "FK_Grammar_level";
       public          postgres    false    220    221    4691            g           2606    16597    reviews FK_grammarReview    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT "FK_grammarReview" FOREIGN KEY (grammar_id) REFERENCES public.grammars(grammar_id) ON UPDATE CASCADE ON DELETE CASCADE;
 D   ALTER TABLE ONLY public.reviews DROP CONSTRAINT "FK_grammarReview";
       public          postgres    false    228    221    4693            e           2606    16528    alphabets FK_lessonAlphabet    FK CONSTRAINT     �   ALTER TABLE ONLY public.alphabets
    ADD CONSTRAINT "FK_lessonAlphabet" FOREIGN KEY (lesson_id) REFERENCES public.alphabetlessons(lesson_id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 G   ALTER TABLE ONLY public.alphabets DROP CONSTRAINT "FK_lessonAlphabet";
       public          postgres    false    225    4699    223            b           2606    16457    users FK_role    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_role" FOREIGN KEY (role_id) REFERENCES public.roles(role_id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT "FK_role";
       public          postgres    false    215    4687    216            h           2606    16618    reviews FK_userReview    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT "FK_userReview" FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 A   ALTER TABLE ONLY public.reviews DROP CONSTRAINT "FK_userReview";
       public          postgres    false    228    215    4681            i           2606    16592    reviews FK_vocabReview    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT "FK_vocabReview" FOREIGN KEY (vocab_id) REFERENCES public.vocabularies(vocab_id) ON UPDATE CASCADE ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.reviews DROP CONSTRAINT "FK_vocabReview";
       public          postgres    false    218    4689    228            c           2606    16534    vocabularies Fk_level    FK CONSTRAINT     �   ALTER TABLE ONLY public.vocabularies
    ADD CONSTRAINT "Fk_level" FOREIGN KEY (level_id) REFERENCES public.levels(level_id) NOT VALID;
 A   ALTER TABLE ONLY public.vocabularies DROP CONSTRAINT "Fk_level";
       public          postgres    false    220    4691    218            f           2606    16547    signupmembers Fk_signupmember    FK CONSTRAINT     �   ALTER TABLE ONLY public.signupmembers
    ADD CONSTRAINT "Fk_signupmember" FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.signupmembers DROP CONSTRAINT "Fk_signupmember";
       public          postgres    false    215    227    4681               I   x�3���,JLO�K�|���e��X�6-�2�tz�{�BI����9��h�2��8�0O���O�.����� ��         �  x��Y[O[I~���~<�F#���Ү�Ҿ��/`��|Y�g�<�c�s	!`�l�0I��������b�n���}9nWw}�����>��bOǎZ��G.��v���!1(��%	����$�><������%�Fc�I�DO'zmݾ?���f��s��a�΋�x2�����t^�\2���!6T�tQ�d�=���Jk�����4����$M�q�%�Dw��*�i�V]߈���8x�g(>!��;���.+�M��?y��U�1Ԟ�tU���N�h���H��I����PxF�51���5�V;]�.��!��G���}�㚡;8@�u1׬;�#'zbu�f�k�g�<�QF��;H�1�l8���ySw�C��Yb�)Rb��i���}�Mm㦚tI7��#�5k	X�2������_�<ٔ�:��`yrSd�Spζ-�:Y����E�%'��<��Z�ˎ��Wvز|�%G��ÈO6k;�`�TUމ0��D/;i���y&��3�@��p�_��2"K}��⡗B-k��("�9`�խ�����$o�j�O�����S�y/���{�D���윧]a�H�]��0�r�Z��0m�Y�MCfj�#�K
`���;듞�1��
hRx�H�[�T�ɘ�+��x�X��c&��[�qM�Uzͨ�Ʊ�j�D (Q�!�X��j�@�C��z ��>8�-���"������b��^(;�,���c��ޚeS	�8̊3&������f���w}�i9:�����G�o��c�Y��c�\r�:�~4����S.h��m�u�D$i��΅������!5�/-sm�~8�62>9	�k�&�q-���ն�J�v��-�^Rx�s��f-�a��v�&
S~���B�&�)��P7Ո7���G��Ӟ�Z/�Tq���'��b���?��Uy����]��e�I���zݦ6�ȶ�?��{{ٱם��0m�0�4_�����u��d/��^`*�(C����}H�C��F|��$z�'{���^+��B��'�c��줘����mg#��0R����Һm�!Ⓗ$&���S�j��[���&hQ�^9լ��k�x┽,&�N��K����dc���A\�g�4�2��ҙ��0�S'�k���0q�^�|��V��ɑ��[�p�V�a, ٬��eB�Gsb�Q;t�@��d��������y��4܃"��.�����kV�o��*秔�9��J��0�a��-�c7����(����CMĠ%���^�~$ʵ����=�����f�X	ʿ����	�ɿу��iEx��W�J�3��"ǇK9�k��!!P��ė�Z{�M{�+�?�qq�W���sM���&ܘG�>V��N}��`ݢ��~�p�e�^�A@��/��MNZ�CtHY�p�f $�-�C��*i���K�YI�-���>@Ȅo�����J砪b�:c%����x�R�>�j�|���U"!���#��B��/��]ΖT��Z��a]���i3b��P��^�M��!��:��A U���ǋ���vj���Dq���9�c�6'���HwS���Fy�DYf�q�������bn>��B����aE06/��V*Y�e�����|�}t��1
_���V+s�^�Q$I�!7�`�I,ж"F�
�Uu~���WŵJ0���H�R4������4�2�>8���z)F��K�������M�J�B�>��1
�~a��ι�j�^����G]}P@�S�kO��Evi�G�=����<z�$�S��ɉF�7���c<9?���<e�<BD�r���`��U�O�(( ��R7�c>t�)��x.�>8`���W�6r�,� �Ts �Uu��^�"��N���(d�^-e�!�ϠVV�8)Ft�׵h�gr\�����<R��u�Q�Vw~��N5O^E���b<��H&x؄efr;3�+rư�Y���D���M�J��,l�Kyר����e���zX/�S%ORP7�DǦv��J�����=V��)X5�G�[�{���������Nڧ�{�(y�"��2�֩�j��]Tx�B�?"�ҋ2��	B	�F�T�/ojI��\��hR�IOr�%�~����d�rz�F��QCF�H�u=�gH���8��n��+��f5�8h٭���+y�p�'��)W��h��rJmí{�y����K�esf�P��K��.���Dd@���=�<V�8!�%ٻ5�:�r�u������=&<Q�uSG�n��F�"�����̗���C���l������8
jq��3%��fD7敖x�o@U��NZ���l@���Pd�s��j�f-�ˡ�{1@�3�e��B�<S=}ݚ�s�i��LK�=T�8ADt�<�FE�zՆ�<AjA����7n��\�PVFV���$�ُ��+w����l�ldP@Q0�S_�zD/�#%�HD79�pf�w��.I��c��c2T�豒'(�������OR�O�Y�;{��pf%kBdM 21����{��q�M��s���=S��u�o�t�B	}�'�ǥ�`�Mh�~vy]G��켺YM���)�~����$X7mTq�(c�����&{u�'�R�ݲ�1������;�g��;���:�naW-��(|��"��Xê#NX��!����ߐÝ�#Ց ��n2���f��ra�PW��ۋ�[\{�U�='�ub�.�]�si�����C���������
֏c(�����?����-����P-a^��P�m�>��GN�؉���Ǯӓ����4z��ŝJ_[���θЯt���&���ȟY�"��H+�(���#F7i����2��K�]rb%�>qby'���q"��w�^�B�W���bV����1��
nQN�c�}JC���˩F�M��U��=Z�I��W�G�^���F��H�Q3>����ۡs�!�U$�¿~~����/�            x�}�QO�Pǟ�Oq5a�n�G%&$�7�/s![-��^��:��p��lc��H�q��Ey(�{4��G���{ێY�����9���s�**q���-Ύ9kr�UB�����}w�����v��2��as���ζ9��Y��ߜ�)�1E�/8�uD�.7�p�ى��^$������6��o�iCX���U�+����w�&(%�+���PEm��t�i,QʵN�)J�+F�tߑ˸V'O)���1�Sm�;3(�Z?���ZM���\&#�!ŵ����|�t&����fPv�V\�Q��թkWS��k�t�j�42t�� �r�ޢE��ӊ��oStof�	��H;��hx�&���Pֵk�{.�vE�ĔI0-�9�
�|��Q�krQ�X�:gz��#S���u�>�xMP.^_��Ǯ(����&�z@�C_�oNaw$g1A� �&�n�����D�U6��<���	�yla`K�1ߔp�/Js�}l�%遬�I���ʸv�ٌ�3�c� �1[?(�|s����U1,���g_��ʂZ䅼���xZ�%��0��7F9��E�J������wْvX35��k{�����<�wk>JH��o�B������^�8���u��Tԉ�S<>	~�X���sIz@qG'Oi�a��a���=h=��qD�U�}ڵ;PZ��t6���xUz��OB�'x�Zݜ$�Y��
:�h�	_2I3NO'#����iY#�*�;M4KD��G"���0 �      �     x��VMOW]?~�[�d���ۖ�"���U6ø�X�glv�(!6jJ��)F�cHC�?&c��/���������>��9��;�,��q���<{��vI�|�.rZl__�˧Xi�w�e׬��&��ϸc������%�/�06���K�7�����L��4r\ǳ"7L��O��n�_�	���B�����L�]D8Iñ*��Q��L������i<N�"�Q�q,CM9�*^�6���'l���j�������]�G����<2|t�i|�py�c�X��8ٲ���e�|�>�I���߄�q{?�أ���	��G
Yc+� �u���D��&� �T�?7�3�E�a�H��5ow0�Iv����,���@Dt��K�z�Mw�=v�K�uq��nvm�m7����١E��	kB��|:�D�\�7���x�>�`X0o�W�{��x�>�+��ʐC��,��DI��[�)�{\H���NK��X��I˲ ��<I�RKNcO	�Kf�|�섺�(=pm��|E�q���b���
4h�%/�t%*Ү� nO�.�U�G�S��0�u`[C�)C������p�FY�5���K۠<�V�0+,L�8���j>8H0
��Y2�G	R�ј&�X��u֥���fQ	��Ѯ,�=���W$��vM�#v�@��?�}M�h�<C%�"
�<C��B	D4A�k�[��_$��I�oV�8t.�^��a��%OfI�.%�wJ�����i�E�D�ʠ]5-���5GW�!O��G�Ѡ)%� /�^C�>!R]�r�6�;+\�c���l���Y{�]�s�)�lfq�}Qw��f�T��A�(q���X�R�A[ӥ��Ӻ�I��=���3�p��I��)>e��W��?���_�@�U�+&H�� �t�j��l�p7c�۫H�z�ǹk��7\�I�Md
m)���MB�=ZGK}�����W$ݖ=�0���"!�Ә*m�E�M�z��m �����;��7��Tu3�2�-�#?���%�x�w�?]h���?��JGM�A�Q�:��oh`f? ���𐒪�Ʉ)=T���Q�l��?�b;�Ҿ:�D��EX�@]�Wu�4!ʧ���~L�d~^�E���0�޷ �z��Mz��hB6���N�N�|��ȷRv-�
�s�+��k�CxRTk��gg�',�4Q����1 ��$9d����d�#4?9����S��s�Rv|*+��\�����bߣx(g��af���}gx����1��'[��I>F}�
�����+O�      �   &   x�3��3�2��3�2��3�2��3�2��3����� I8�           x��ӿN�0���y�Z���,0�	�uh���?s*!T&��0��ĆX2��P��q:��d�n�����	̦�[ݵ�'8+|u�����$'���J��V(ntv4��"qA0eH�zm��+8��<���GQ2P���}��=V0���;dK�"�s_��(<��|	�Ϸ�C�p�L�}��+�Q�IH��YO�����뺖]ɼ/;�6����*i%��Vƒ�Z "C�p�0��X8�fq�Q^sT�;b��8c�!J �      �   #   x�3�,-N-�2��M�M2�9Sr3�b���� }�         �   x�m���� Dc�B|�!d�'��#�A� ���+�s]�3�1+p�q�/ط�J��*���G&:)���Fj�P������ϲ�c��c��D� ;�m%�WM��Zc�4W-ӟ[�������hR�!��K2�|�+���P���J.ę|� ���{�2Q�0�|&猧�d�K���L�<xcݷ��W�FԬ㧚s��P|      �   �  x�u�K��@��5��n�z�܍:���T�(�
:r��Fo�,}�q4t����e~�"�;��/�G��*��s.`E�ˊ� ��@�(��AP�v�-��a��L#֌��#�� 3��:ֶC�l�	"��
Px�NOTϖr�w"x.���mX^�?[��jˌ��Pߕ|�Y��F����Ӣp���&jg��w��Tm�M����������(l�nInө
�Z��X���C)��&B�,�*�L����S�hfΜAdD�����Ӿ���.���N��+-掛��1�}}:+��@p�����+�_���f���<��EPGXSD�1�6��U�beR��>avjg�p�u�P���6+7I�N��]z(&�mBן�u`�>�:�,��  �Ҵ�u4������U?6_�p	�IY��g��;L�V�fi�{���ﴻ��S�(M�c(�I�(���5      �   H  x���[OWǟ��|�
I������T��1�w��P�#��1�.4�"����k���Z|�ղ����s�^J�Hh�{n�9󟡍�vK��:����;ܮ-��b�yj�`��#��]�,
��K��5�����nh���n.&XgK;����G�����n����U�pP�[uEYM�y~؞��ÑsŊ�Zħ�b��	|�1��<�;�F��c&�f;�Dg�&�\�df�}�W�+��������3�b�E4{�P�F�5�`ě+��+��zu�=��397�G�\�-� 7����X!�೹�(#=v*�C�D$��8�[
��	S��5��xb�.�4���X3C���cn����9�� ��2���t��y�>1ͺ`��Է+�뻦+��p�"���d"����c�3Z��&e�+��c�ڈ���`�
�~�j��Z�o4N�;���R�9	q��;&�S��Y�NC���zqW5����(�k��A���f��4��H�[���Cl�;V�� p�Sh>�X+z���6w �Xe�W�	�� �Q�L�z��ro_�$�*�9�)�(|��~� C&i8�d"1�1��\�f;A��z�j�ӷ�uօ�d�2����:�8�Y��&�dq��,��l}M����v�f���m�s��W� �!i%�k'�ba���n���+��I�oLA����S�P1�ؤ��S�����A(��ϱ�9��}���� ��c������`RE���`m߳��C$��&�!�&� ��<���VP+d���/ң�����ط�^��� \�*���Xy�[��7cz�}N��j9�Aw��m���{�:�T@e�7z�r���!Xorܱ&�ǰ�0r�LtGT���}�� ��c��مq�ͲhQ�
�`�+��^�E!�GxL�U�� ���'�T��jyC �g�;dg��;Wl4z]%go�� IL�!U>�F�z�z����:FCOr�{s1W�M+_�(~J��8V��-55����7 Gmw6[kü���=WU���u�N�_q/$P3�b� �M�^�׍�\�����V�S ��Y�j�P��nLӝ��<o�t�:�+Jx?X��ޢ��eʖ]�{�D��u�=��D��ҴE)���1w�:��C��~i�e;�c��'��S��[�f�+��;z}!�d��G�
%��ɞi��_���V߾�n�?b5.'�'l�y½�;���z�&�ĵߠ#t�z�lt�#A3A���vc�+�d��L�!�_�;@�S����j��{�/�ݼ�p}�X�H1�|3�Q	�"�é��nc�<��---����     